import { z } from "@hono/zod-openapi";
import { optionalInfos } from "./baseTypes";

export const requiredBasicInfosOptional = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
});
export const schoolIdSchemaUpdate = z.object({
  schoolId: z.uuid().optional(),
});
export const coachUpdateItemSchema = requiredBasicInfosOptional
  .extend(schoolIdSchemaUpdate.def.shape)
  .extend(optionalInfos.def.shape);
export const coachUpdateSchema = z.object({
  id: z.uuid(),
  coach: z.lazy(() => coachUpdateItemSchema),
});
export const coachesUpdateSchema = z.object({
  coaches: z.array(z.lazy(() => coachUpdateSchema)),
});
