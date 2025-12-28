import { z } from "@hono/zod-openapi";
import { TransactionSessionType } from ".";
import { studentSelectFieldsSchema, studentsInsertSchema } from 'usad-scheme';

type StudentInsertItem = z.infer<typeof studentsInsertSchema>['students'][number]

export async function insertStudents(tx: TransactionSessionType, input: StudentInsertItem[]) {
  return (await tx.student.createManyAndReturn({
    data: input.map((s, i) => ({
      ...s,
      mutationIndex: i
    })),
    select: studentSelectFieldsSchema
  })).sort((a, b) => a.mutationIndex - b.mutationIndex);
}