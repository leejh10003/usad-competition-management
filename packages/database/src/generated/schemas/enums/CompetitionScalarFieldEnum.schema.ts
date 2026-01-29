import * as z from 'zod';

export const CompetitionScalarFieldEnumSchema = z.enum(['id', 'name', 'startsAt', 'endsAt', 'mutationIndex', 'round', 'nonRelativeEvents', 'streetAddress', 'city', 'state', 'zipCode'])

export type CompetitionScalarFieldEnum = z.infer<typeof CompetitionScalarFieldEnumSchema>;