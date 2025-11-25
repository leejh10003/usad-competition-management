import { z } from "@hono/zod-openapi";
import { teamDivisionEnums } from "../constants";

export const schoolRelationshipById = z.object({
    schoolId: z.uuid(),
});

export const optionalInfos = z.object({
    externalTeamId: z.string().nullable().optional(),
    division: teamDivisionEnums
})