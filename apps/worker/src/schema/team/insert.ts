import { z } from "@hono/zod-openapi";
import { optionalInfos, schoolRelationshipById } from "./baseTypes";
import { studentsInsertSchema } from "../student";

export const teamInsertItem = schoolRelationshipById
  .extend(optionalInfos.def.shape)
  .extend(studentsInsertSchema.def.shape);
export const teamInsertSchema = z.object({
    team: teamInsertItem
});
export const teamsInsertSchema = z.object({
    teams: z.array(teamInsertItem)
})