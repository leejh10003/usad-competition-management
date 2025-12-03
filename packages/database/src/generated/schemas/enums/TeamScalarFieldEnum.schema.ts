import * as z from 'zod';

export const TeamScalarFieldEnumSchema = z.enum(['id', 'externalTeamId', 'schoolId', 'division', 'objectiveScore', 'subjectiveScore', 'mutationIndex'])

export type TeamScalarFieldEnum = z.infer<typeof TeamScalarFieldEnumSchema>;