import { z } from "@hono/zod-openapi";

export const coachTeamMappings = z.object({
  coachId: z.uuid(),
  teamId: z.uuid(),
});
