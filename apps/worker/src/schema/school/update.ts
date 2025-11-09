import { z } from "@hono/zod-openapi";
import { optionalInfos } from "./baseTypes";

export const requiredInfosOptional = z.object({
    name: z.string().optional(),
})

export const schoolUpdateItem = requiredInfosOptional.extend(optionalInfos);
export const schoolUpdateSchema = z.object({
  id: z.string(),
  school: schoolUpdateItem
});
export const schoolsUpdateSchema = z.object({
  schools: z.array(schoolUpdateSchema)
})