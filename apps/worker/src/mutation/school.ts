import { z } from "@hono/zod-openapi";
import { insertCoaches, insertTeams, TransactionSessionType } from ".";
import { schoolsInsertSchema, schoolSelectFieldsSchema, coachTeamMappings } from 'usad-scheme';
import { omit } from 'lodash';
type SchoolInsertItem = z.infer<typeof schoolsInsertSchema>['schools'][number];
type CoachTeamMappingsInsertItem = z.infer<typeof coachTeamMappings>;

export async function insertSchools(tx: TransactionSessionType, schools: SchoolInsertItem[]){
  const insertSchools = schools.map((school, i) => omit({
    ...school,
    mutationIndex: i
  }, 'teams', 'coaches', 'coachTeamMappings', 'primaryCoachIndex'));
  const insertedSchools = (await tx.school.createManyAndReturn({
    data: insertSchools,
    select: schoolSelectFieldsSchema,
  })).sort((a, b) => a.mutationIndex - b.mutationIndex);
  const schoolTeamsIndex: number[] = [0];
  const teamsSchoolIdAdded = schools.map((school, i) => {
    schoolTeamsIndex.push(schoolTeamsIndex[i] + school.teams.length);
    return school.teams.map((team) => ({
      ...team,
      schoolId: insertedSchools[i].id
    }))
  }).reduce((prev, current) => [...prev, ...current], []).map((t, i) => ({
    ...t,
    mutationIndex: i
  }));
  const teamsCreated = await insertTeams(tx, teamsSchoolIdAdded);
  const schoolCoachesIndex: number[] = [0];
  const coachesSchoolIdAdded = schools.map((school, i) => {
    schoolCoachesIndex.push(schoolCoachesIndex[i] + school.coaches.length);
    return school.coaches.map((coach) => ({
      ...coach,
      schoolId: insertedSchools[i].id
    }))
  }).reduce((prev, current) => [...prev, ...current], []).map((t, i) => ({
    ...t,
    mutationIndex: i
  }));
  const coachesCreated = await insertCoaches(tx, coachesSchoolIdAdded);
  const schoolsChildrenAdded = insertedSchools.map((s, i) => {
    const coaches = coachesCreated.slice(schoolCoachesIndex[i], schoolCoachesIndex[i+1]);
    const teams = teamsCreated.slice(schoolTeamsIndex[i], schoolTeamsIndex[i+1]);
    return {
      ...omit(s, 'coachTeamMappings', 'primaryCoachIndex'),
      coaches,
      teams,
      ...(schools[i].primaryCoachIndex || schools[i].primaryCoachId ?  {
        primaryCoachId: schools[i].primaryCoachId ?? coaches[schools[i].primaryCoachIndex].id
      }  : {})
    };
  });
  await Promise.all(schoolsChildrenAdded.filter(({primaryCoachId}) => primaryCoachId).map(async ({id, primaryCoachId}) => await tx.school.update({
    where: {
      id
    },
    data: {
      primaryCoachId
    }
  })));
  const coachTeamMapping = schools.reduce<CoachTeamMappingsInsertItem[]>((prev, current) => [...prev, ...current.coachTeamMappings.map(({coachIndex, teamIndex}, i) => ({
    coachId: schoolsChildrenAdded[i].coaches[coachIndex].id,
    teamId: schoolsChildrenAdded[i].teams[teamIndex].id,
  }))], [])
  await tx.teamCoachRelationship.createMany({
    data: coachTeamMapping,
  });
  return schoolsChildrenAdded;
}
