import { z } from "@hono/zod-openapi";
import { optionalInfos, requiredBasicInfos, schoolIdSchema } from "./baseTypes";
import { basicSuccess } from "../baseTypes";

export const coachResponseItemSchema = requiredBasicInfos
  .extend(schoolIdSchema.def.shape)
  .extend(optionalInfos.def.shape)
  .extend({
    id: z.string(),
  });

export const coachResponseSchema = basicSuccess.extend({
  coach: z.lazy(() => coachResponseItemSchema),
});
export const coachesResponseSchema = basicSuccess.extend({
  coaches: z.array(z.lazy(() => coachResponseItemSchema)),
});
