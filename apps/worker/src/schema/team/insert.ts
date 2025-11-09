import { z } from "@hono/zod-openapi";
import { optionalInfos, schoolRelationshipById } from "./baseTypes";
import { studentsInsertSchema } from "../student";

export const teamInsertItem = schoolRelationshipById
  .extend(optionalInfos)
  .extend(studentsInsertSchema);
export const teamInsertSchema = z.object({
    team: teamInsertItem
});
export const teamsInsertSchema = z.object({
    teams: z.array(teamInsertItem)
})