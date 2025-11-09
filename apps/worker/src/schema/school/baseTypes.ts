import { z } from "@hono/zod-openapi";
import { coachesInsertSchema } from "../coach";

export const optionalBasicInfos = z.object({
  externalSchoolId: z.string().nullable().optional(),
  streetAddress: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  zipCode: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  principalName: z.string().nullable().optional(),
  principalEmail: z.string().nullable().optional(),
  emailDomain: z.string().nullable().optional(),
  primaryCoachId: z.string().nullable().optional()
});
export const optionalInfos = optionalBasicInfos.extend(coachesInsertSchema.def.shape);
export const basicRequiredInfos = z.object({
  name: z.string(),
  isVirtual: z.boolean()
});
