import { z } from "@hono/zod-openapi";

export const coachQuerySchema = z.object({
  externalCoachId: z.string().optional(),
  lastName: z.string().optional(),
  firstName: z.string().optional(),
  schoolId: z.uuid().optional(),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  offset: z.coerce.number().int().min(0).optional().default(0),
});