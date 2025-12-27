import * as z from 'zod';
export const CompetitionAvailableStateUpsertResultSchema = z.object({
  competitionId: z.string(),
  state: z.unknown(),
  competition: z.unknown()
});