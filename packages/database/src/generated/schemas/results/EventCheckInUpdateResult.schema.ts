import * as z from 'zod';
export const EventCheckInUpdateResultSchema = z.nullable(z.object({
  studentId: z.string(),
  student: z.unknown(),
  eventId: z.string(),
  event: z.unknown(),
  checkedInAt: z.date().optional()
}));