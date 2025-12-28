import _, { omit } from "lodash";
import { insertSchools, TransactionSessionType } from ".";
import { competitionsInsertSchema, competitionsFieldsSchema } from 'usad-scheme';
import { z } from "@hono/zod-openapi";
import { insertEvents } from "./event";

type CompetitionInsertItem = z.infer<typeof competitionsInsertSchema>['competitions'][number];

export async function insertCompetitions(
  tx: TransactionSessionType,
  competitions: CompetitionInsertItem[]
) {
  const insertCompetitions = competitions.map((competition, i) => omit({
    ...competition,
    mutationIndex: i
  }, 'events', 'schools'));
  const insertedCompetitions = (await tx.competition.createManyAndReturn({
    data: insertCompetitions,
    select: competitionsFieldsSchema
  }));
  const competitionSchoolsIndex: number[] = [0];
  const schoolsCompetitionIdAdded = competitions.map((competition, i) => {
    competitionSchoolsIndex.push(competitionSchoolsIndex[i] + competition.schools.length);
    return competition.schools.map((school) => ({
      ...school,
      competitionId: insertedCompetitions[i].id
    }));
  }).reduce((prev, current) => [...prev, ...current], []).map((s, i) => ({
    ...s,
    mutationIndex: i
  }));
  const schoolsCreated = await insertSchools(tx, schoolsCompetitionIdAdded);
  const competitionEventsIndex: number[] = [0];
  const eventsCompetitionIdAdded = competitions.map((competition, i) => {
    competitionEventsIndex.push(competitionEventsIndex[i] + competition.events.length);
    return competition.events.map((event) => ({
      ...event,
      competitionId: insertedCompetitions[i].id
    }));
  }).reduce((prev, current) => [...prev, ...current], []).map((e, i) => ({
    ...e,
    mutationIndex: i
  }));
  const eventsCreated = await insertEvents(tx, eventsCompetitionIdAdded);
  return insertedCompetitions.map((c, i) => {
    const events = eventsCreated.slice(competitionEventsIndex[i], competitionEventsIndex[i+1]);
    const schools = schoolsCreated.slice(competitionSchoolsIndex[i], competitionSchoolsIndex[i+1]);
    return {
      ...c,
      events,
      schools,
    }
  })
}