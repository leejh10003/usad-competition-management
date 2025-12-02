import * as z from 'zod';
export const TeamCoachRelationshipUpsertResultSchema = z.object({
  teamId: z.string(),
  team: z.unknown(),
  coachId: z.string(),
  coach: z.unknown()
});