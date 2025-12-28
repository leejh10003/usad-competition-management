import { z } from "@hono/zod-openapi";
import { insertStudents, TransactionSessionType } from ".";
import { teamSelectFieldsSchema, teamsInsertSchema } from 'usad-scheme';
import { omit } from 'lodash';
type TeamInsertItem = z.infer<typeof teamsInsertSchema>['teams'][number]

export async function insertTeams(tx: TransactionSessionType, teams: TeamInsertItem[]){
  const insertTeams = teams.map((team, i) => omit({
    ...team,
    mutationIndex: i
  }, 'students'));
  const teamsInserted = (await tx.team.createManyAndReturn({
    data: insertTeams,
    select: teamSelectFieldsSchema,
  })).sort((a, b) => a.mutationIndex - b.mutationIndex);
  const teamStudentsIndex: number[] = [0];
  const studentsTeamIdAdded = teams.map((team, i) => {
    teamStudentsIndex.push(teamStudentsIndex[i] + team.students.length);
    return team.students.map((student) => ({
      ...student,
      teamId: teamsInserted[i].id
    }))
  }).reduce((prev, current) => [...prev, ...current], []).map((s, i) => ({
    ...s,
    mutationIndex: i
  }));
  const studentsCreated = await insertStudents(tx, studentsTeamIdAdded);
  const returnTeams = teamsInserted.map((t, i) => ({
    ...t,
    students: studentsCreated.slice(teamStudentsIndex[i], teamStudentsIndex[i+1])
  }));
  return returnTeams;
}