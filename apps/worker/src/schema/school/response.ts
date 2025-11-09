import { z } from "@hono/zod-openapi";
import { basicRequiredInfos, optionalBasicInfos } from "./baseTypes";
import { basicSuccess } from "../baseTypes";

export const schoolResponseItemSchema = optionalBasicInfos
  .extend({
    id: z.string(),
  })
  .extend(basicRequiredInfos.def.shape)
  .extend({
    id: z.string(),
  });
export const schoolResponse = basicSuccess.extend({
  school: schoolResponseItemSchema,
});
export const schoolsResponse = basicSuccess.extend({
  schools: z.array(schoolResponseItemSchema),
});
