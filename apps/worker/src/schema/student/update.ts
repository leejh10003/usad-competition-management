import { z } from "@hono/zod-openapi";
import { division } from "../constants";
import { optionalInfos, studentRelationshipUndeclared } from "./baseTypes";

const basicStudentUpdate = z.object({
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  externalStudentId: z.string().optional(),
  division: division.optional(),
});
export const studentUpdateItem = basicStudentUpdate
  .extend(studentRelationshipUndeclared.def.shape)
  .extend(optionalInfos.def.shape)
  .extend({
    schoolId: z.uuid().optional()
  });

export const studentUpdateSchema = z.object({
  id: z.uuid(),
  student: studentUpdateItem,
});
export const studentsUpdateSchema = z.object({
  students: z.array(studentUpdateSchema),
});
