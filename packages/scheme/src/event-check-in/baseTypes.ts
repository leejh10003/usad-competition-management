import { z } from "@hono/zod-openapi";

export const eventCheckedInItem = z.object({
  studentId: z.uuid(),
  eventId: z.uuid(),
  checkedInAt: z.date(),
});