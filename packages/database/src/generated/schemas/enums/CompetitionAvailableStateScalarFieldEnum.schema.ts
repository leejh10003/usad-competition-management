import * as z from 'zod';

export const CompetitionAvailableStateScalarFieldEnumSchema = z.enum(['competitionId', 'state'])

export type CompetitionAvailableStateScalarFieldEnum = z.infer<typeof CompetitionAvailableStateScalarFieldEnumSchema>;