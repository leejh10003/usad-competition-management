import { z } from "@hono/zod-openapi";
import { optionalInfos } from "./baseTypes";

export const schoolRelationshipByIdUpdate = z.object({
  schoolId: z.uuid().optional(),
});

export const teamUpdateItemSchema = optionalInfos.extend(
  schoolRelationshipByIdUpdate.def.shape,
);

export const teamUpdateSchema = z.object({
  id: z.uuid(),
  team: teamUpdateItemSchema,
});
export const teamsUpdateSchema = z.object({
  teams: z.array(teamUpdateSchema),
});
