import * as z from 'zod';
// prettier-ignore
export const EventCheckInInputSchema = z.object({
    studentId: z.string(),
    student: z.unknown(),
    eventId: z.string(),
    event: z.unknown(),
    checkedInAt: z.date().optional().nullable()
}).strict();

export type EventCheckInInputType = z.infer<typeof EventCheckInInputSchema>;
