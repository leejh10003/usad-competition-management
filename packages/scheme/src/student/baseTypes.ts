import { z } from "@hono/zod-openapi";
import { stateEnums } from "../constants";

export const optionalInfosCommon = z.object({
  externalStudentId: z.string().nullable().optional(),
  usadPin: z.string().nullable().optional(),
  gpa: z.float32().nullable().optional(),
  teamId: z.uuid().nullable().optional(),
  signature: z.string().nullable().optional(),
  attachmentOnRegistering: z.string().nullable().optional(),
  objectiveScore: z.float32().nullable().optional(),
  subjectiveScore: z.float32().nullable().optional(),
});

export const insertStudentWithSchoolId = z.object({
  schoolId: z.uuid().nullable().optional(),
});

export const insertStudentWithIndividualAddress = z.object({
  streetAddress: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: stateEnums.optional(),
  zipCode: z.string().nullable().optional(),
  guardianFirstName: z.string().nullable().optional(),
  guardianLastName: z.string().nullable().optional(),
  guardianPhone: z.string().nullable().optional(),
  guardianEmail: z.string().nullable().optional(),
  competitionId: z.uuid().nullable().optional(),
});

export const optionalInfos = optionalInfosCommon.and(
  z.union([insertStudentWithSchoolId, insertStudentWithIndividualAddress]),
);
