import { z } from "@hono/zod-openapi";
import { sortEnums } from "./constants";

export const basicSuccess = z.object({
  success: z.literal(true),
});
export const basicFailed = z.object({
  success: z.literal(false),
  message: z.string(),
});
export type SortEntity<T extends string> = {
  [k in T]?: z.infer<typeof sortEnums>;
}