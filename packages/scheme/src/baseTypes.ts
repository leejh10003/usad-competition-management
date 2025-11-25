import { z } from "@hono/zod-openapi";

export const basicSuccess = z.object({
  success: z.literal(true),
});
export const basicFailed = z.object({
  success: z.literal(false),
  message: z.string(),
});
