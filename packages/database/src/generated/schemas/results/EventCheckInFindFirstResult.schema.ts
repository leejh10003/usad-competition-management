import * as z from 'zod';
export const EventCheckInFindFirstResultSchema = z.nullable(z.object({
  studentId: z.string(),
  student: z.unknown(),
  eventId: z.string(),
  event: z.unknown(),
  checkedInAt: z.date().optional()
}));