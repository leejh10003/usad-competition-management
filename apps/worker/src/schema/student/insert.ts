import { z } from "@hono/zod-openapi";
import { division } from "../constants";
import { optionalInfos } from "./baseTypes";
const requiredStudentRelationshipInsert = z.object({
  teamId: z.string(),
  schoolId: z.string(),
});

const basicStudentInsert = z.object({
  lastName: z.string(),
  firstName: z.string(),
  externalStudentId: z.string(),
  division,
});
export const studentInsertItem = basicStudentInsert
  .extend(requiredStudentRelationshipInsert)
  .extend(optionalInfos);
export const studentInsertSchema = z.object({
  student: studentInsertItem,
});
export const studentsInsertSchema = z.object({
  students: z.array(studentInsertItem),
});
