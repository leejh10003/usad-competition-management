import * as z from 'zod';

export const NonRelativeEventsSchema = z.enum(['math', 'economics', 'science', 'socialScience', 'music', 'art', 'language', 'essay', 'superQuiz'])

export type NonRelativeEvents = z.infer<typeof NonRelativeEventsSchema>;