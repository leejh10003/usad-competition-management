import * as z from 'zod';

export const EventScalarFieldEnumSchema = z.enum(['id', 'name', 'competitionId', 'mutationIndex', 'type'])

export type EventScalarFieldEnum = z.infer<typeof EventScalarFieldEnumSchema>;