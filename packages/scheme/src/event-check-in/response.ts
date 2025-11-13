import { z } from "@hono/zod-openapi";
import { basicSuccess } from "../baseTypes";

export const eventCheckedInResponseItem = z.object({
  studentId: z.uuid(),
  eventId: z.uuid(),
  checkedInAt: z.date(),
});

export const eventCheckedInsResponseSchema = basicSuccess.extend({
  events: z.array(eventCheckedInResponseItem),
});

export const eventCheckedInResponseSchema = basicSuccess.extend({
  event: eventCheckedInResponseItem,
});
