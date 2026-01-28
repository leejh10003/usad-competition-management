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
  .extend(teamsNestedInsertSchema.partial({teams: true}).def.shape)
  .extend(coachesNestedInsertSchema.partial({coaches: true}).def.shape)
  .extend(z.object({
    coachTeamMappings: z.array(coachTeamMapping).optional(),
    primaryCoachIndex: z.int().optional(),
  }).def.shape);
export const schoolInsertSchema = z.object({
  school: schoolInsertItem,
});
export const schoolsInsertSchema = z.object({
  schools: z.array(schoolInsertItem),
});
