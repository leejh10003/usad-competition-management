import { z } from "@hono/zod-openapi";
import { division } from "../constants";


export const studentResponseItemSchema = z.object({
  id: z.string(),
  externalStudentId: z.string().nullable(),
  division,
  gpa: z.float32().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  teamId: z.string(),
  schoolId: z.string(),
});
export const studentsResponseSchema = z.object({
  success: z.literal(true),
  students: z.array(studentResponseItemSchema),
});
export const studentResponseSchema = z.object({
  success: z.literal(true),
  student: studentResponseItemSchema,
});