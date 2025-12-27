import * as z from 'zod';

export const SchoolScalarFieldEnumSchema = z.enum(['id', 'externalSchoolId', 'name', 'isVirtual', 'streetAddress', 'city', 'state', 'zipCode', 'phone', 'principalName', 'principalEmail', 'objectiveScore', 'subjectiveScore', 'primaryCoachId', 'emailDomain', 'division', 'competitionId', 'mutationIndex'])

export type SchoolScalarFieldEnum = z.infer<typeof SchoolScalarFieldEnumSchema>;