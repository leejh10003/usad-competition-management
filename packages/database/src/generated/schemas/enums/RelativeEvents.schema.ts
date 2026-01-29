import * as z from 'zod';

export const RelativeEventsSchema = z.enum(['speech', 'interview'])

export type RelativeEvents = z.infer<typeof RelativeEventsSchema>;