import * as z from 'zod';
export const TeamCoachRelationshipUpdateResultSchema = z.nullable(z.object({
  teamId: z.string(),
  team: z.unknown(),
  coachId: z.string(),
  coach: z.unknown()
}));