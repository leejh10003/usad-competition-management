import * as z from 'zod';

export const TeamScalarFieldEnumSchema = z.enum(['id', 'externalTeamId', 'schoolId', 'division', 'objectiveScore', 'subjectiveScore'])

export type TeamScalarFieldEnum = z.infer<typeof TeamScalarFieldEnumSchema>;