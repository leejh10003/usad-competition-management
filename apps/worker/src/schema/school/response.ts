import { z } from "@hono/zod-openapi";
import { basicRequiredInfos, optionalBasicInfos } from "./baseTypes";
import { basicSuccess } from "../baseTypes";

export const schoolResponseItemSchema = optionalBasicInfos
  .extend(z.object({
    id: z.string()
  }))
  .extend(basicRequiredInfos).extend(z.object({
    id: z.string()
  }));
export const schoolResponse = basicSuccess.extend({
    school: schoolResponseItemSchema
});
export const schoolsResponse = basicSuccess.extend({
    schooles: z.array(schoolResponseItemSchema)
})