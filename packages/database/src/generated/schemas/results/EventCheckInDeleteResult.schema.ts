import * as z from 'zod';
export const EventCheckInDeleteResultSchema = z.nullable(z.object({
  studentId: z.string(),
  student: z.unknown(),
  eventId: z.string(),
  event: z.unknown(),
  checkedInAt: z.date().optional()
}));