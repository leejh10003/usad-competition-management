import { z } from "@hono/zod-openapi";

export const updateEventItem = z.object({
    name: z.string().optional(),
    startsAt: z.date().optional(),
});


export const updateEventSchema = z.object({
    id: z.uuid(),
    event: updateEventItem
});

export const updateEventsSchema = z.object({
    events: z.array(updateEventSchema)
});