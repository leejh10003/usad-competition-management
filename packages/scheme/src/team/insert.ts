import { z } from "@hono/zod-openapi";
import { optionalInfos, requiredBasicInfos, schoolRelationshipById } from "./baseTypes";
import { studentsInsertSchema, studentsNestedInsertSchema } from "../student";

export const teamInsertItem = schoolRelationshipById
  .extend(optionalInfos.def.shape)
  .extend(studentsNestedInsertSchema.def.shape)
  .extend(requiredBasicInfos.def.shape)
  .extend(studentsInsertSchema.def.shape);
export const teamInsertSchema = z.object({
  team: teamInsertItem,
});
export const teamsInsertSchema = z.object({
  teams: z.array(teamInsertItem),
});
export const teamNestedInsertItem = optionalInfos.extend(
  studentsNestedInsertSchema.def.shape,
);
export const teamsNestedInsertSchema = z.object({
  teams: z.array(teamNestedInsertItem),
});
