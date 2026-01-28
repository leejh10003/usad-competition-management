import { z } from "@hono/zod-openapi";
import { TransactionSessionType } from ".";
import { coachesInsertSchema, coachSelectFieldsSchema } from 'usad-scheme';
import { CoachCreateManyInputObjectSchema } from 'database/src/generated/schemas/objects/CoachCreateManyInput.schema'

type CoachInsertItem = z.infer<typeof coachesInsertSchema>['coaches'][number]

export async function insertCoaches(tx: TransactionSessionType, input: CoachInsertItem[]) {
  return (await tx.coach.createManyAndReturn({
    data: input.map<z.infer<typeof CoachCreateManyInputObjectSchema>>((s, i) => ({
      ...s,
      mutationIndex: i
    })),
    select: coachSelectFieldsSchema
  })).sort((a, b) => a.mutationIndex - b.mutationIndex);
}