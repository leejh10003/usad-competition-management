import { z } from "@hono/zod-openapi";
import { relativeEventEnums } from "../constants";
export const requiredInfos = z.object({
  name: z.string(),
  competitionId: z.uuid(),
  mutationIndex: z.int(),
  type: relativeEventEnums
});
