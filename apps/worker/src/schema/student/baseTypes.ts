import { z } from "@hono/zod-openapi";

export const optionalInfos = z.object({
  externalStudentId: z.string().nullable().optional(),
  usadPin: z.string().nullable().optional(),
  gpa: z.float32().nullable().optional(),
});
export const studentRelationshipUndeclared = z.object({
  teamId: z.uuid().optional(),
  schoolId: z.uuid().optional()
});