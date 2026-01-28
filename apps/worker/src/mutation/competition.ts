import { omit } from "es-toolkit";
import { insertSchools, TransactionSessionType } from ".";
import { competitionsInsertSchema, competitionsFieldsSchema, competitionResponseItemSchema } from 'usad-scheme';
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
  }, ['events', 'schools', 'competitionAvailableStates']));
  const insertedCompetitions = (await tx.competition.createManyAndReturn({
    data: insertCompetitions,
    select: omit(competitionsFieldsSchema, ['events', 'schools', 'competitionAvailableStates'])
  })).sort((a, b) => a.mutationIndex - b.mutationIndex);
  const idToCompetitionIndexMap = new Map<string, number>();
  insertedCompetitions.forEach(c => idToCompetitionIndexMap.set(c.id, c.mutationIndex));
  const schoolsToInsert = competitions.flatMap((competition, i) => 
    competition.schools.map((s, si) => ({ ...s, competitionId: insertedCompetitions[i].id, mutationIndex: si }))
  );
  const eventsToInsert = competitions.flatMap((competition, i) => 
    competition.events.map((e, ei) => ({ ...e, competitionId: insertedCompetitions[i].id, mutationIndex: ei }))
  );
  const competitionAvailableStatesToInsert = competitions.flatMap((competition, i) => 
    (competition.competitionAvailableStates || []).map((cas) => ({
      competitionId: insertedCompetitions[i].id,
      state: cas.state,
    }))
  );
  const [schoolsCreated, eventsCreated, competitionAvailableStatesCreated] = await Promise.all([
    insertSchools(tx, schoolsToInsert),
    insertEvents(tx, eventsToInsert),
    tx.competitionAvailableState.createManyAndReturn({
      data: competitionAvailableStatesToInsert
    })
  ]);
  const fullSchoolsByCompetitionIndex = new Map<number, typeof schoolsCreated>();
  const fullEventsByCompetitionIndex = new Map<number, typeof eventsCreated>();
  const fullCompetitionAvailableStatesByCompetitionIndex = new Map<number, typeof competitionAvailableStatesCreated>();
  schoolsCreated.forEach(s => {
    const competitionIdx = idToCompetitionIndexMap.get(s.competitionId)!;
    if (!fullSchoolsByCompetitionIndex.has(competitionIdx)) fullSchoolsByCompetitionIndex.set(competitionIdx, []);
    fullSchoolsByCompetitionIndex.get(competitionIdx)!.push(s);
  });
  eventsCreated.forEach(e => {
    const competitionIdx = idToCompetitionIndexMap.get(e.competitionId)!;
    if (!fullEventsByCompetitionIndex.has(competitionIdx)) fullEventsByCompetitionIndex.set(competitionIdx, []);
    fullEventsByCompetitionIndex.get(competitionIdx)!.push(e);
  });
  competitionAvailableStatesCreated.forEach(cas => {
    const competitionIdx = idToCompetitionIndexMap.get(cas.competitionId)!;
    if (!fullCompetitionAvailableStatesByCompetitionIndex.has(competitionIdx)) fullCompetitionAvailableStatesByCompetitionIndex.set(competitionIdx, []);
    fullCompetitionAvailableStatesByCompetitionIndex.get(competitionIdx)!.push(cas);
  });
  return insertedCompetitions.map((c, i) => {
    const schools = fullSchoolsByCompetitionIndex.get(i) || [];
    const events = fullEventsByCompetitionIndex.get(i) || [];
    const competitionAvailableStates = fullCompetitionAvailableStatesByCompetitionIndex.get(i) || [];
    return {
      ...c,
      events,
      schools,
      competitionAvailableStates
    } as z.infer<typeof competitionResponseItemSchema>
  })
}