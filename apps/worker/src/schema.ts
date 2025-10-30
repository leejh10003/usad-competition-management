import { z } from "@hono/zod-openapi";
import { $Enums } from "@prisma/client";
const divisionEnums: $Enums.Division[] = ["H", "S", "V"];
const division = z.enum(divisionEnums);
export const studentQuerySchema = z.object({
  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(100)
    .optional()
    .default(10)
    .openapi({ description: "Number of students to retrieve", example: 10 }),
  offset: z.coerce.number().int().min(0).optional().default(0),
  firstName: z.coerce.string().optional().default("").openapi({ description: "Filter by first name", example: "John" }),
  lastName: z.coerce.string().optional().default("").openapi({ description: "Filter by last name", example: "Doe" }),
  division: z.coerce.string().optional().transform((e) => {
    try {
      const parsed = JSON.parse(e ?? '');
      if (Array.isArray(parsed) && parsed.every((item) => divisionEnums.includes(item))) {
        return parsed as $Enums.Division[];
      } else {
        throw new Error('Invalid division array');
      }
    } catch (e) {
      return [];
    };
  }).openapi({ description: "Filter by division", example: "H" }),
});
export const testResponse = z.object({
  success: z.literal(true),
  data: z.array(
    z.object({
      id: z.string(),
      externalStudentId: z.string(),
      division: division,
      gpa: z.number().nullable(),
      firstName: z.string(),
      lastName: z.string(),
    })
  ),
});
export const testError = z.object({
  success: z.literal(false),
  message: z.string(),
});
