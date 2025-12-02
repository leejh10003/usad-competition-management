import * as z from 'zod';
// prettier-ignore
export const TeamCoachRelationshipInputSchema = z.object({
    teamId: z.string(),
    team: z.unknown(),
    coachId: z.string(),
    coach: z.unknown()
}).strict();

export type TeamCoachRelationshipInputType = z.infer<typeof TeamCoachRelationshipInputSchema>;
