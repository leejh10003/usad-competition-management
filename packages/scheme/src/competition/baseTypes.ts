import { z } from "@hono/zod-openapi";
import { stateEnums } from "../constants";

export const basicRequiredInfos = z.object({
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
});
export const basicOptionalInfos = z.object({
  state: stateEnums.nullable().optional(),
});