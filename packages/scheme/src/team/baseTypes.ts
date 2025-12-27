import { z } from "@hono/zod-openapi";
import { teamDivisionEnums } from "../constants";

export const schoolRelationshipById = z.object({
  schoolId: z.uuid(),
});

export const requiredBasicInfos = z.object({
  mutationIndex: z.int(),
});

export const optionalInfos = z.object({
  externalTeamId: z.string().nullable().optional(),
  division: teamDivisionEnums.nullable().optional(),
  objectiveScore: z.float32().nullable().optional(),
  subjectiveScore: z.float32().nullable().optional(),
});
