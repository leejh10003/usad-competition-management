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
  firstName: z.coerce
    .string()
    .optional()
    .default("")
    .openapi({ description: "Filter by first name", example: "John" }),
  lastName: z.coerce
    .string()
    .optional()
    .default("")
    .openapi({ description: "Filter by last name", example: "Doe" }),
  division: z.coerce
    .string()
    .optional()
    .transform((e) => {
      try {
        const parsed = JSON.parse(e ?? "");
        if (
          Array.isArray(parsed) &&
          parsed.every((item) => divisionEnums.includes(item))
        ) {
          return parsed as $Enums.Division[];
        } else {
          throw new Error("Invalid division array");
        }
      } catch (e) {
        return [];
      }
    })
    .openapi({ description: "Filter by division", example: "H" }),
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
  externalSchoolId: z.string().nullable(),
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
export const schoolWriteSchema = z.object({
  externalSchoolId: z.string().nullable().optional(),
  name: z.string(),
  isVirtual: z.boolean(),
  streetAddress: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  zipCode: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  principalName: z.string().nullable().optional(),
  principalEmail: z.string().nullable().optional(),
  primaryCoachId: z.string().nullable().optional(),
  emailDomain: z.string().nullable().optional(),
});
export const schoolUpdateSchema = schoolWriteSchema.extend({
  id: z.string()
});
export const schoolUpdateRequestSchema = z.object({
  school: schoolUpdateSchema
});
export const schoolListInsertSchema = z.object({
  schools: z.array(schoolWriteSchema)
});
export const schoolListUpdateSchema = z.object({
  schools: z.array(schoolUpdateSchema)
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
  externalTeamId: z.string().nullable(),
  schoolId: z.string(),
});
export const teamWriteSchema = z.object({
  externalTeamId: z.string().nullable(),
  schoolId: z.string(),
});
export const teamUpdateSchema = z.object({
  externalTeamId: z.string().nullable().optional(),
  schoolId: z.string().optional(),
});
export const teamUpdateWithIdSchema = teamUpdateSchema.extend({
  id: z.string(),
})
export const teamInsertListClientInputSchema = z.object({
  teams: z.array(teamWriteSchema)
});
export const teamUpdateListClientInputSchema = z.object({
  teams: z.array(teamUpdateWithIdSchema)
});
export const teamUpdateOneByIdSchema = z.object({
  team: teamUpdateSchema
})
export const coachSelectSchema = z.object({
  id: z.string(),
  externalCoachId: z.string().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
});
export const coachWriteSchema = z.object({
  externalCoachId: z.string().nullable().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  schoolId: z.string()
});
export const coachUpdateSchema = z.object({
  id: z.string(),
  externalCoachId: z.string().nullable().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().nullable().optional(),
  schoolId: z.string().optional()
});
export const coachListInsertSchema = z.object({
  coaches: z.array(coachWriteSchema)
});
export const coachListUpdateSchema = z.object({
  coaches: z.array(coachUpdateSchema)
});
export const coachUpdateByIdSchema = z.object({
  coach: coachUpdateSchema
})
export const teamsListResponseSchema = z.object({
  success: z.literal(true),
  data: z.array(teamSelectSchema),
});
export const teamResponseSchema = z.object({
  success: z.literal(true),
  team: teamSelectSchema
});
export const teamsListRequestQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  offset: z.coerce.number().int().min(0).optional().default(0),
  externalTeamId: z.string().optional(),
  id: z.string().optional(),
});
export const coachListResponseSchema = z.object({
  success: z.literal(true),
  data: z.array(coachSelectSchema),
});
export const coachResponseSchema = z.object({
  success: z.literal(true),
  data: coachSelectSchema,
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
export const schoolQuerySchema = z.object({
  externalSchoolId: z.coerce.string().optional(),
  name: z.coerce.string().optional(),
  isVirtual: z.coerce
    .string()
    .transform((v) => {
      v === "true" ? true : v === "false" ? false : undefined;
    })
    .optional(),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  offset: z.coerce.number().int().min(0).optional().default(0),
});
export const schoolResponseSchema = z.object({
  success: z.literal(true),
  data: schoolSelectSchema,
});

export const schoolListResponseSchema = z.object({
  success: z.literal(true),
  data: z.array(schoolSelectSchema),
});
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
  schoolId: true,
};
export const coachSelectFieldsSchema = {
  id: true,
  schoolId: true,
  externalCoachId: true,
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
};
export const studentInputFromClientSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  externalStudentId: z.string(),
  division: division,
  teamId: z.string(),
  schoolId: z.string(),
  gpa: z.float32(),
  usadPin: z.string().optional(),
});
export const studentResponseItemSchema = z.object({
  id: z.string(),
  externalStudentId: z.string().nullable().optional(),
  division,
  gpa: z.float32().nullable().optional(),
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
export const studentWriteResponzeSchema = z.object({
  success: z.literal(true),
  student: studentResponseSchema
})
export const studentUpdateSchema = studentInputFromClientSchema.extend({
  id: z.string(),
});
export const studentListInsertSchema = z.object({
  success: z.literal(true),
  students: z.array(studentInputFromClientSchema),
});
export const studentWriteSchema = z.object({
  student: studentInputFromClientSchema
})
export const studentListUpdateSchema = z.object({
  students: z.array(studentUpdateSchema),
});
export const studentSelectSchema = {
  id: true,
  externalStudentId: true,
  division: true,
  gpa: true,
  firstName: true,
  lastName: true,
  teamId: true,
  schoolId: true,
};
