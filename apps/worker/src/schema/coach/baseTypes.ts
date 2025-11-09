import { z } from "@hono/zod-openapi";

export const requiredBasicInfos = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string()
});
export const schoolIdSchema = z.object({
  schoolId: z.string(),
});
export const optionalInfos = z.object({
    externalCoachId: z.string().nullable().optional(),
  phone: z.string().nullable().optional()
});