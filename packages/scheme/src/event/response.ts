import { z } from "@hono/zod-openapi";
import { basicSuccess } from "../baseTypes";

export const eventResponseItemSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    startsAt: z.date(),
});

export const eventsResponseItemSchema = basicSuccess.extend({
    events: z.array(eventResponseItemSchema)
});

export const eventResponseSchema = basicSuccess.extend({
    event: eventResponseItemSchema
})