import { z } from "@hono/zod-openapi";
import {
  studentInsertSchema,
  studentSelectFieldsSchema,
  studentsInsertSchema,
} from "../schema";
import _ from "lodash";
import {
  studentInsertItem,
  studentNestedInsertItem,
  studentsNestedInsertSchema,
} from "../schema/student";
import { TransactionSessionType, TransactionContextType } from "./index";
function guranteeRelationship(
  studentInput:
    | z.infer<typeof studentInsertItem>
    | z.infer<typeof studentNestedInsertItem>,
  context: TransactionContextType
) {
  if (
    (!context.schoolId && !studentInput.schoolId) ||
    (!context.teamId && !studentInput.teamId)
  ) {
    throw new Error("Relationships needed for student are not provided");
  }
  const schoolId = studentInput.schoolId ?? context.schoolId!;
  const teamId = studentInput.teamId ?? context.teamId;
  return {
    ...studentInput,
    schoolId,
    teamId,
  } as z.infer<typeof studentInsertItem>;
}
export async function insertStudent(
  studentInput: z.infer<typeof studentInsertSchema>,
  tx: TransactionSessionType,
  context: TransactionContextType = {}
): Promise<z.infer<typeof studentInsertItem>> {
  return await tx.student.create({
    data: guranteeRelationship(studentInput.student, context),
    select: studentSelectFieldsSchema,
  });
}
export async function insertStudents(
  studentsInput:
    | z.infer<typeof studentsInsertSchema>
    | z.infer<typeof studentsNestedInsertSchema>,
  tx: TransactionSessionType,
  context: TransactionContextType = {}
): Promise<Array<z.infer<typeof studentInsertItem>>> {
  return await Promise.all(
    studentsInput.students.map(
      async (student) =>
        await tx.student.create({
          data: guranteeRelationship(student, context),
          select: studentSelectFieldsSchema,
        })
    )
  );
}
