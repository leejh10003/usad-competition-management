import { z } from "@hono/zod-openapi";

export const schoolQuerySchema = z.object({
  externalSchoolId: z.coerce.string().optional(),
  name: z.coerce.string().optional(),
  isVirtual: z.coerce
    .string()
    .transform((v) => {
      v === "true" ? true : v === "false" ? false : undefined;
    })
    .optional(),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  offset: z.coerce.number().int().min(0).optional().default(0),
});
