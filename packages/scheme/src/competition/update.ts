import { z } from "@hono/zod-openapi";

export const requiredInfosOptional = z.object({
  name: z.string().optional(),
  startsAt: z.date().optional(),
  endsAt: z.date().optional(),
});
export const competitionUpdateSchema = z.object({
  id: z.uuid(),
  school: requiredInfosOptional,
});
export const competitionsUpdateSchema = z.object({
  competitions: z.array(competitionUpdateSchema),
});
