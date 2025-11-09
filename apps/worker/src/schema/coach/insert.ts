import { z } from "@hono/zod-openapi";
import {
  optionalInfos,
  requiredBasicInfos,
  schoolIdSchema,
} from "./baseTypes";

export const coachInsertItemSchema = requiredBasicInfos
  .extend(schoolIdSchema)
  .extend(optionalInfos);
export const coachInsertSchema = z.object({
  coach: z.lazy(() => coachInsertItemSchema),
});
export const coachesInsertSchema = z.object({
  coaches: z.array(z.lazy(() => coachInsertItemSchema)),
});
