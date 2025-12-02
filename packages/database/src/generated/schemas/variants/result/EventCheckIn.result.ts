import * as z from 'zod';
// prettier-ignore
export const EventCheckInResultSchema = z.object({
    studentId: z.string(),
    student: z.unknown(),
    eventId: z.string(),
    event: z.unknown(),
    checkedInAt: z.date().nullable()
}).strict();

export type EventCheckInResultType = z.infer<typeof EventCheckInResultSchema>;
