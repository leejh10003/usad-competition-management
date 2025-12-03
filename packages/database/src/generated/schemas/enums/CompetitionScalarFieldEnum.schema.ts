import * as z from 'zod';

export const CompetitionScalarFieldEnumSchema = z.enum(['id', 'name', 'startsAt', 'endsAt', 'state', 'mutationIndex'])

export type CompetitionScalarFieldEnum = z.infer<typeof CompetitionScalarFieldEnumSchema>;