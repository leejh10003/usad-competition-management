import * as z from 'zod';

export const CoachScalarFieldEnumSchema = z.enum(['id', 'externalCoachId', 'firstName', 'lastName', 'email', 'phone', 'signature', 'objectiveScore', 'subjectiveScore', 'mutationIndex', 'schoolId'])

export type CoachScalarFieldEnum = z.infer<typeof CoachScalarFieldEnumSchema>;