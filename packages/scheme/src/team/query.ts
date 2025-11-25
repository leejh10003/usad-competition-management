import { z } from "@hono/zod-openapi";

export const teamQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  offset: z.coerce.number().int().min(0).optional().default(0),
  externalTeamId: z.string().optional(),
  id: z.uuid().optional(),
});
