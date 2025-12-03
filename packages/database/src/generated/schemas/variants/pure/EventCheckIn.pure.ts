import * as z from 'zod';
// prettier-ignore
export const EventCheckInModelSchema = z.object({
    studentId: z.string(),
    student: z.unknown(),
    eventId: z.string(),
    event: z.unknown(),
    checkedInAt: z.date().nullable(),
    mutationIndex: z.number().int()
}).strict();

export type EventCheckInPureType = z.infer<typeof EventCheckInModelSchema>;
