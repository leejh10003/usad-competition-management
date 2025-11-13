import { z } from "@hono/zod-openapi";
import { requiredInfos } from "./baseTypes";

export const eventsInsertSchema = z.object({
  events: z.array(requiredInfos),
});
export const eventInsertSchema = z.object({
  event: requiredInfos,
});
