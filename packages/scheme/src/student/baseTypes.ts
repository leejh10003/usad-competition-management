import { z } from "@hono/zod-openapi";

export const optionalInfosCommon = z.object({
  externalStudentId: z.string().nullable().optional(),
  usadPin: z.string().nullable().optional(),
  gpa: z.float32().nullable().optional(),
  teamId: z.uuid().nullable().optional(),
  signature: z.string().nullable().optional()
});


export const insertStudentWithSchoolId = z.object({
  schoolId: z.uuid().nullable().optional(),
});

export const insertStudentWithIndividualAddress = z.object({
  streetAddress: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  zipCode: z.string().nullable().optional(),
});

export const optionalInfos = optionalInfosCommon.and(
  z.union([insertStudentWithSchoolId, insertStudentWithIndividualAddress])
);

