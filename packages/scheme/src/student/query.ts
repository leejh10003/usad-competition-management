import { z } from "@hono/zod-openapi";
import { divisionEnums } from "../constants";
import { $Enums } from "@prisma/client";

export const studentQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
  offset: z.coerce.number().int().min(0).optional().default(0),
  firstName: z.coerce.string().optional().default(""),
  lastName: z.coerce.string().optional().default(""),
  division: z.coerce
    .string()
    .optional()
    .transform((e) => {
      try {
        const parsed = JSON.parse(e ?? "");
        if (
          Array.isArray(parsed) &&
          parsed.every((item) => divisionEnums.includes(item))
        ) {
          return parsed as $Enums.Division[];
        } else {
          throw new Error("Invalid division array");
        }
      } catch (e) {
        return [];
      }
    }),
});
