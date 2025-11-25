import { z } from "@hono/zod-openapi";
import { basicSuccess } from "../baseTypes";
import { teamDivisionEnums } from "../constants";

export const teamResponseItemSchema = z.object({
  id: z.uuid(),
  externalTeamId: z.string().nullable(),
  schoolId: z.uuid(),
  division: teamDivisionEnums.nullable(),
  objectiveScore: z.float32().nullable(),
  subjectiveScore: z.float32().nullable(),
});

export const teamResponseSchema = basicSuccess.extend({
  team: teamResponseItemSchema,
});
export const teamsResponseSchema = basicSuccess.extend({
  teams: z.array(teamResponseItemSchema),
  count: z.int()
});
