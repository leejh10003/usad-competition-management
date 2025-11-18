import { z } from "@hono/zod-openapi";
import { division } from "../constants";
import { optionalInfosCommon } from "./baseTypes";

const basicStudentUpdate = z.object({
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  externalStudentId: z.string().optional(),
  division: division.optional(),
});

const optionalInfos = optionalInfosCommon.extend({
  schoolId: z.uuid().nullable().optional(),
  streetAddress: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  zipCode: z.string().nullable().optional(),
})

export const studentUpdateItem = basicStudentUpdate
  .and(optionalInfos);
  

export const studentUpdateSchema = z.object({
  id: z.uuid(),
  student: studentUpdateItem,
});
export const studentsUpdateSchema = z.object({
  students: z.array(studentUpdateSchema),
});
