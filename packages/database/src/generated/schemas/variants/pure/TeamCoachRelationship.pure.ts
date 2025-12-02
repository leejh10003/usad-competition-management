import * as z from 'zod';
// prettier-ignore
export const TeamCoachRelationshipModelSchema = z.object({
    teamId: z.string(),
    team: z.unknown(),
    coachId: z.string(),
    coach: z.unknown()
}).strict();

export type TeamCoachRelationshipPureType = z.infer<typeof TeamCoachRelationshipModelSchema>;
