import * as z from 'zod';
export const EventCheckInUpsertResultSchema = z.object({
  studentId: z.string(),
  student: z.unknown(),
  eventId: z.string(),
  event: z.unknown(),
  checkedInAt: z.date().optional()
});