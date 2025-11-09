import { z } from "@hono/zod-openapi";

export const schoolRelationshipById = z.object({
    schoolId: z.string(),
});

export const optionalInfos = z.object({
    externalTeamId: z.string().nullable().optional()
})