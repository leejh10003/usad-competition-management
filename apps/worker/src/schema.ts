import { z } from "@hono/zod-openapi";
export const studentQuerySchema = z.object({
  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(100)
    .optional()
    .default(10)
    .openapi({ description: "Number of students to retrieve", example: 10 }),
  offset: z.coerce
    .number()
    .int()
    .min(0)
    .optional()
    .default(0),
});
export const testResponse = z.object({
    success: z.literal(true),
    data: z.string()
});
export const testError = z.object({
  success: z.literal(false),
  message: z.string()
})