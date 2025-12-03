import z from "zod";
import { sortEnums } from "../constants";
import { CoachWhereInputObjectSchema } from "database/src/generated/schemas/objects/CoachWhereInput.schema";
import { coerceCheckSchema } from "../util";

const apiQueryParamTestSchema = z.object({
  sort: z.coerce
    .string()
    .optional()
    .transform((v) =>
      v
        ? (JSON.parse(v) as { [k: string]: z.infer<typeof sortEnums> }[])
        : undefined
    ),
});
const testZodSchema = z.object({
  test: z
    .union([z.coerce.string(), z.object()])
    .optional()
    .transform((arg) => coerceCheckSchema(CoachWhereInputObjectSchema, arg))
    .optional(),
});
export { apiQueryParamTestSchema, testZodSchema };
