import { z } from "@hono/zod-openapi";
import { TransactionSessionType } from ".";
import { studentSelectFieldsSchema, studentsInsertSchema } from 'usad-scheme';
import { StudentCreateManyInputObjectSchema } from 'database/src/generated/schemas/objects/StudentCreateManyInput.schema'

type StudentInsertItem = z.infer<typeof studentsInsertSchema>['students'][number]

export async function insertStudents(tx: TransactionSessionType, input: StudentInsertItem[]) {
  return (await tx.student.createManyAndReturn({
    data: input.map<z.infer<typeof StudentCreateManyInputObjectSchema>>((s, i) => ({
      ...s,
      mutationIndex: i
    })),
    select: studentSelectFieldsSchema
  })).sort((a, b) => a.mutationIndex - b.mutationIndex);
}