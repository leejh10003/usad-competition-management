import { z } from "@hono/zod-openapi";
import { division } from "../constants";
import { optionalInfos } from "./baseTypes";

const basicStudentUpdate = z.object({
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  externalStudentId: z.string().optional(),
  division: division.optional(),
});

const studentRelationshipUpdate = z.object({
  teamId: z.string().optional(),
});
export const studentUpdateItem = basicStudentUpdate
  .extend(studentRelationshipUpdate.def.shape)
  .extend(optionalInfos.def.shape)
  .extend({
    schoolId: z.string().optional()
  });

export const studentUpdateSchema = z.object({
  id: z.string(),
  student: studentUpdateItem,
});
export const studentsUpdateSchema = z.object({
  students: z.array(studentUpdateSchema),
});
