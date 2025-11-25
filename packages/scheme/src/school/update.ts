import { z } from "@hono/zod-openapi";
import { optionalInfos } from "./baseTypes";

export const requiredInfosOptional = z.object({
  name: z.string().optional(),
  isVirtual: z.boolean().optional(),
});

export const schoolUpdateItem = requiredInfosOptional.extend(
  optionalInfos.def.shape,
);
export const schoolUpdateSchema = z.object({
  id: z.uuid(),
  school: schoolUpdateItem,
});
export const schoolsUpdateSchema = z.object({
  schools: z.array(schoolUpdateSchema),
});
