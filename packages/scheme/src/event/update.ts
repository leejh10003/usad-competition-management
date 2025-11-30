import { z } from "@hono/zod-openapi";

export const eventUpdateItemSchema = z.object({
  name: z.string().optional(),
  startsAt: z.date().optional(),
  endsAt: z.date().optional(),
  competitionId: z.uuid().optional(),
});

export const eventUpdateSchema = z.object({
  event: eventUpdateItemSchema,
});

export const eventsUpdateSchema = z.object({
  events: z.array(
    z.object({
      id: z.uuid(),
      event: eventUpdateItemSchema,
    }),
  ),
});
