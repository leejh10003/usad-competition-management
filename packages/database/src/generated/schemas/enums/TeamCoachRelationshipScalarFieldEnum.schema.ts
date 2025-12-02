import * as z from 'zod';

export const TeamCoachRelationshipScalarFieldEnumSchema = z.enum(['teamId', 'coachId'])

export type TeamCoachRelationshipScalarFieldEnum = z.infer<typeof TeamCoachRelationshipScalarFieldEnumSchema>;