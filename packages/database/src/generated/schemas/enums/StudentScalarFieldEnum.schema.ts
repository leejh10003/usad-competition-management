import * as z from 'zod';

export const StudentScalarFieldEnumSchema = z.enum(['id', 'externalStudentId', 'division', 'gpa', 'firstName', 'lastName', 'usadPin', 'signature', 'attachmentOnRegistering', 'streetAddress', 'city', 'state', 'zipCode', 'guardianFirstName', 'guardianLastName', 'guardianPhone', 'guardianEmail', 'mutationIndex', 'teamId', 'schoolId', 'competitionId'])

export type StudentScalarFieldEnum = z.infer<typeof StudentScalarFieldEnumSchema>;