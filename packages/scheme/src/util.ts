import { z } from "@hono/zod-openapi";

function coerceCheckSchema<T extends z.core.$ZodType>(
  schema: T,
  value: Object | string | undefined
) {
  const { data, success } = z.safeParse(
    schema,
    typeof value === "object" ? value : JSON.parse(value ?? "{}")
  );
  return success ? data : undefined;
}
export { coerceCheckSchema };
