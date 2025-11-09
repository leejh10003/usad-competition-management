import { z } from "@hono/zod-openapi";
import { optionalInfos, requiredBasicInfos, schoolIdSchema } from "./baseTypes";

export const coachResponseItemSchema = requiredBasicInfos
  .extend(schoolIdSchema)
  .extend(optionalInfos)
  .extend(
    z.object({
      id: z.string(),
    })
  );

export const coachResponseSchema = z.object({
  coach: z.lazy(() => coachResponseItemSchema),
});
export const coachesResponseSchema = z.object({
  coaches: z.array(z.lazy(() => coachResponseItemSchema)),
});
