import { z } from "@hono/zod-openapi";
import { basicRequiredInfos, optionalInfos } from "./baseTypes";
import { teamsInsertSchema } from "../team";
import { coachesInsertSchema } from "../coach";

export const schoolInsertItem = basicRequiredInfos
  .extend(optionalInfos)
  .extend(teamsInsertSchema)
  .extend(coachesInsertSchema);
export const schoolInsertSchema = z.object({
  school: schoolInsertItem,
});
export const schoolsInsertSchema = z.object({
  schools: z.array(schoolInsertItem),
});
