import { z } from "@hono/zod-openapi";
import { $Enums } from "@prisma/client";
const divisionEnums: $Enums.Division[] = ["H", "S", "V"];
const division = z.enum(divisionEnums);
export const studentQuerySchema = z.object({
  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(100)
    .optional()
    .default(10)
    .openapi({ description: "Number of students to retrieve", example: 10 }),
  offset: z.coerce.number().int().min(0).optional().default(0),
  firstName: z.coerce.string().optional().default("").openapi({ description: "Filter by first name", example: "John" }),
  lastName: z.coerce.string().optional().default("").openapi({ description: "Filter by last name", example: "Doe" }),
  division: z.coerce.string().optional().transform((e) => {
    try {
      const parsed = JSON.parse(e ?? '');
      if (Array.isArray(parsed) && parsed.every((item) => divisionEnums.includes(item))) {
        return parsed as $Enums.Division[];
      } else {
        throw new Error('Invalid division array');
      }
    } catch (e) {
      return [];
    };
  }).openapi({ description: "Filter by division", example: "H" }),
});
export const testResponse = z.object({
  success: z.literal(true),
  data: z.array(
    z.object({
      id: z.string(),
      externalStudentId: z.string(),
      division: division,
      gpa: z.number().nullable(),
      firstName: z.string(),
      lastName: z.string(),
    })
  ),
});
export const testError = z.object({
  success: z.literal(false),
  message: z.string(),
});
export const coachQuerySchema = z.object({
  externalCoachId: z.string().optional(),
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  schoolId: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  offset: z.coerce.number().int().min(0).optional().default(0),
});
export const schoolSelectSchema = z.object({
  id: z.string(),
  externalSchoolId: z.string(),
  name: z.string(),
  isVirtual: z.boolean(),
  streetAddress: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  zipCode: z.string().nullable(),
  phone: z.string().nullable(),
  principalName: z.string().nullable(),
  principalEmail: z.string().nullable(),
  primaryCoachId: z.string().nullable(),
  emailDomain: z.string().nullable(),
});
export const studentSchema = z.object({
  id: z.string(),
  lastName: z.string(),
  firstName: z.string(),
  externalStudentId: z.string(),
  division,
});
export const teamSelectSchema = z.object({
  id: z.string(),
  externalTeamId: z.string(),
  students: z.array(studentSchema),
});
export const coachSelectSchema = z.object({
  id: z.string(),
  externalCoachId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  teams: z.array(teamSelectSchema),
  school: schoolSelectSchema,
});
export const coachResponseSchema = z.object({
  success: z.literal(true),
  data: z.array(coachSelectSchema),
});
export const schoolSelectFieldsSchema = {
  id: true,
  externalSchoolId: true,
  name: true,
  isVirtual: true,
  streetAddress: true,
  city: true,
  state: true,
  zipCode: true,
  phone: true,
  principalName: true,
  principalEmail: true,
  primaryCoachId: true,
  emailDomain: true,
};
export const studentsSelectFieldsSchema = {
  id: true,
  lastName: true,
  firstName: true,
  externalStudentId: true,
  division: true,
};
export const teamSelectFieldsSchema = {
  id: true,
  externalTeamId: true,
  students: {
    select: studentsSelectFieldsSchema
  }
};
export const coachSelectFieldsSchema = {
  id: true,
  school: {
    select: schoolSelectFieldsSchema
  },
  teams: {
    select: teamSelectFieldsSchema
  },
  externalCoachId: true,
  firstName: true,
  lastName: true,
  email: true,
  phone: true
}