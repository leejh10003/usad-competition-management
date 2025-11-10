import { z } from "@hono/zod-openapi";
import { basicRequiredInfos, optionalInfos } from "./baseTypes";
import { teamsNestedInsertSchema } from "../team";
import { coachesNestedInsertSchema } from "../coach";

const coachTeamMapping = z.object({
  coachIndex: z.int(),
  teamIndex: z.int(),
});

export const schoolInsertItem = basicRequiredInfos
  .extend(optionalInfos.def.shape)
  .extend(teamsNestedInsertSchema.def.shape)
  .extend(coachesNestedInsertSchema.def.shape)
  .extend({
    coachTeamMappings: z.array(coachTeamMapping),
    primaryCoachIndex: z.int()
  });
export const schoolInsertSchema = z.object({
  school: schoolInsertItem,
});
export const schoolsInsertSchema = z.object({
  schools: z.array(schoolInsertItem),
});
