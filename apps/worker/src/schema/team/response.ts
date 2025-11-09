import { z } from "@hono/zod-openapi";

export const teamResponseItemSchema = z.object({
  id: z.string(),
  externalTeamId: z.string().nullable(),
  schoolId: z.string(),
})

export const teamResponseSchema = z.object({
  team: teamResponseItemSchema
});
export const teamsResponseSchema = z.object({
  teams: z.array(teamResponseItemSchema)
})