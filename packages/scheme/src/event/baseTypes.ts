import { z } from "@hono/zod-openapi";
export const requiredInfos = z.object({
  name: z.string(),
  startsAt: z.date(),
});
