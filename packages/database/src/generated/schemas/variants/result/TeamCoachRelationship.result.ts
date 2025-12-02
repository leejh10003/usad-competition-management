import * as z from 'zod';
// prettier-ignore
export const TeamCoachRelationshipResultSchema = z.object({
    teamId: z.string(),
    team: z.unknown(),
    coachId: z.string(),
    coach: z.unknown()
}).strict();

export type TeamCoachRelationshipResultType = z.infer<typeof TeamCoachRelationshipResultSchema>;
