import { z } from "@hono/zod-openapi";

export const coachTeamMappingsQuerySchema = z.object({
  teamId: z.uuid().optional(),
  coachId: z.uuid().optional(),
});
