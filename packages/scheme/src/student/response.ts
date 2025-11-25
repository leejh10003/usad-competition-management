import { z } from "@hono/zod-openapi";
import { division } from "../constants";
import { basicSuccess } from "../baseTypes";

export const studentResponseItemSchema = z.object({
  id: z.uuid(),
  externalStudentId: z.string().nullable(),
  division,
  gpa: z.float32().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  teamId: z.uuid().nullable(),
  schoolId: z.uuid().nullable(),
  streetAddress: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  zipCode: z.string().nullable(),
  guardianFirstName: z.string().nullable(),
  guardianLastName: z.string().nullable(),
  guardianPhone: z.string().nullable(),
  guardianEmail: z.string().nullable(),
  attachmentOnRegistering: z.string().nullable(),
});
export const studentsResponseSchema = basicSuccess.extend({
  success: z.literal(true),
  students: z.array(studentResponseItemSchema),
  count: z.int(),
});
export const studentResponseSchema = basicSuccess.extend({
  success: z.literal(true),
  student: studentResponseItemSchema,
});
