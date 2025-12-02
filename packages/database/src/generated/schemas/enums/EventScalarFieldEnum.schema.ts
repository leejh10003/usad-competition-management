import * as z from 'zod';

export const EventScalarFieldEnumSchema = z.enum(['id', 'name', 'startsAt', 'endsAt', 'competitionId'])

export type EventScalarFieldEnum = z.infer<typeof EventScalarFieldEnumSchema>;