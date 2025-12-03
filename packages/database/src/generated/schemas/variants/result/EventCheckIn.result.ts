import * as z from 'zod';
// prettier-ignore
export const EventCheckInResultSchema = z.object({
    studentId: z.string(),
    student: z.unknown(),
    eventId: z.string(),
    event: z.unknown(),
    checkedInAt: z.date().nullable(),
    mutationIndex: z.number().int()
}).strict();

export type EventCheckInResultType = z.infer<typeof EventCheckInResultSchema>;
