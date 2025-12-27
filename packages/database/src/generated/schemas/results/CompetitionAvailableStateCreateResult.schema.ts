import * as z from 'zod';
export const CompetitionAvailableStateCreateResultSchema = z.object({
  competitionId: z.string(),
  state: z.unknown(),
  competition: z.unknown()
});