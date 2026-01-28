import { z } from "@hono/zod-openapi";
import { insertStudents, TransactionSessionType } from ".";
import { teamSelectFieldsSchema, teamsInsertSchema } from 'usad-scheme';
import { TeamCreateManyInputObjectSchema } from 'database/src/generated/schemas/objects/TeamCreateManyInput.schema'
import { omit } from 'es-toolkit';
type TeamInsertItem = z.infer<typeof teamsInsertSchema>['teams'][number]

export async function insertTeams(tx: TransactionSessionType, teams: TeamInsertItem[]){
  const insertTeams = teams.map<z.infer<typeof TeamCreateManyInputObjectSchema>>((team, i) => {
    return {
      ...omit(team, ['students']), 
      mutationIndex: i
    } as z.infer<typeof TeamCreateManyInputObjectSchema>;
  });
  const teamsInserted = (await tx.team.createManyAndReturn({
    data: insertTeams,
    select: teamSelectFieldsSchema,
  })).sort((a, b) => a.mutationIndex - b.mutationIndex);

  const idToTeamIndexMap = new Map<string, number>();
  teamsInserted.forEach(t => idToTeamIndexMap.set(t.id, t.mutationIndex));

  const studentsToInsert = teams.flatMap((team, i) => 
    team.students.map((s, si) => ({ ...s, teamId: teamsInserted[i].id, schoolId: teamsInserted[i].schoolId, mutationIndex: si }))
  );
  const insertedStudents = await insertStudents(tx, studentsToInsert);
  const fullStudentsByTeamIndex = new Map<number, typeof insertedStudents>();
  insertedStudents.forEach(s => {
    const teamIdx = idToTeamIndexMap.get(s.teamId!)!;
    if (!fullStudentsByTeamIndex.has(teamIdx)) fullStudentsByTeamIndex.set(teamIdx, []);
    fullStudentsByTeamIndex.get(teamIdx)!.push(s);
  })
  const returnTeams = teamsInserted.map((t) => ({
    ...t,
    students: fullStudentsByTeamIndex.get(t.mutationIndex) || [],
  }));
  return returnTeams;
}