import { z } from "@hono/zod-openapi";

export const basicRequiredInfos = z.object({
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
});
