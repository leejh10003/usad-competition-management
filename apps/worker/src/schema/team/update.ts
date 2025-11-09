import { z } from "@hono/zod-openapi";
import { optionalInfos } from "./baseTypes";

export const schoolRelationshipByIdUpdate = z.object({
  schoolId: z.string().optional(),
});

export const teamUpdateItemSchema = optionalInfos.extend(
  schoolRelationshipByIdUpdate.def.shape
);

export const teamUpdateSchema = z.object({
  id: z.string(),
  team: teamUpdateItemSchema,
});
export const teamsUpdateSchema = z.object({
  teams: z.array(teamUpdateSchema),
});
