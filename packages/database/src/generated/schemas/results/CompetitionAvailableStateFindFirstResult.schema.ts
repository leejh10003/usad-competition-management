import * as z from 'zod';
export const CompetitionAvailableStateFindFirstResultSchema = z.nullable(z.object({
  competitionId: z.string(),
  state: z.unknown(),
  competition: z.unknown()
}));