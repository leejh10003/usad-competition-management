import { z } from "@hono/zod-openapi";
import { optionalInfos, schoolRelationshipById } from "./baseTypes";
import { studentsNestedInsertSchema } from "../student";

export const teamInsertItem = schoolRelationshipById
  .extend(optionalInfos.def.shape)
  .extend(studentsNestedInsertSchema.def.shape);
export const teamInsertSchema = z.object({
  team: teamInsertItem,
});
export const teamsInsertSchema = z.object({
  teams: z.array(teamInsertItem),
});
export const teamNestedInsertItem = optionalInfos.extend(
  studentsNestedInsertSchema.def.shape
);
export const teamsNestedInsertSchema = z.object({
  teams: z.array(teamNestedInsertItem),
})