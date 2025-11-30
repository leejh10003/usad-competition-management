import { z } from "@hono/zod-openapi";
import { division } from "../constants";
import { insertStudentWithIndividualAddress, insertStudentWithSchoolId, optionalInfosCommon } from "./baseTypes";

const basicStudentUpdate = z.object({
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  externalStudentId: z.string().optional(),
  division: division.optional(),
});

export const studentUpdateItem = basicStudentUpdate.or(insertStudentWithSchoolId).or(insertStudentWithIndividualAddress).or(optionalInfosCommon);

export const studentUpdateSchema = z.object({
  id: z.uuid(),
  student: studentUpdateItem,
});
export const studentsUpdateSchema = z.object({
  students: z.array(studentUpdateSchema),
});
