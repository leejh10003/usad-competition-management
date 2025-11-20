import { z } from "@hono/zod-openapi";
import { basicSuccess } from "../baseTypes";
import { requiredInfos } from "./baseTypes";

export const eventResponseItemSchema = requiredInfos.extend({
  id: z.uuid(),
});

export const eventsResponseSchema = basicSuccess.extend({
  events: z.array(eventResponseItemSchema),
  count: z.int(),
});

export const eventResponseSchema = basicSuccess.extend({
  event: eventResponseItemSchema,
});
