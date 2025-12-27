import * as z from 'zod';
export const CompetitionAvailableStateFindUniqueResultSchema = z.nullable(z.object({
  competitionId: z.string(),
  state: z.unknown(),
  competition: z.unknown()
}));