import * as z from 'zod';

export const EventCheckInScalarFieldEnumSchema = z.enum(['studentId', 'eventId', 'checkedInAt', 'mutationIndex'])

export type EventCheckInScalarFieldEnum = z.infer<typeof EventCheckInScalarFieldEnumSchema>;