import { z } from "@hono/zod-openapi";
import { TransactionSessionType } from ".";
import { coachesInsertSchema, coachSelectFieldsSchema } from 'usad-scheme';

type CoachInsertItem = z.infer<typeof coachesInsertSchema>['coaches'][number]

export async function insertCoaches(tx: TransactionSessionType, input: CoachInsertItem[]) {
  return (await tx.coach.createManyAndReturn({
    data: input.map((s, i) => ({
      ...s,
      mutationIndex: i
    })),
    select: coachSelectFieldsSchema
  })).sort((a, b) => a.mutationIndex - b.mutationIndex);
}