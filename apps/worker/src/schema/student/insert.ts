import { z } from "@hono/zod-openapi";
import { division } from "../constants";
import { optionalInfos, studentRelationshipUndeclared } from "./baseTypes";
const requiredStudentRelationshipInsert = z.object({
  teamId: z.uuid(),
  schoolId: z.uuid(),
});

const basicStudentInsert = z.object({
  lastName: z.string(),
  firstName: z.string(),
  externalStudentId: z.string(),
  division,
});
export const studentInsertItem = basicStudentInsert
  .extend(requiredStudentRelationshipInsert.def.shape)
  .extend(optionalInfos.def.shape);
export const studentInsertSchema = z.object({
  student: studentInsertItem,
});
export const studentsInsertSchema = z.object({
  students: z.array(studentInsertItem),
});
export const studentNestedInsertItem = basicStudentInsert
  .extend(studentRelationshipUndeclared.def.shape)
  .extend(optionalInfos.def.shape);
export const studentsNestedInsertSchema = z.object({
  students: z.array(studentNestedInsertItem),
});
