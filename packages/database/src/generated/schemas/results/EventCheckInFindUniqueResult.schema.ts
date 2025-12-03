import * as z from 'zod';
export const EventCheckInFindUniqueResultSchema = z.nullable(z.object({
  studentId: z.string(),
  student: z.unknown(),
  eventId: z.string(),
  event: z.unknown(),
  checkedInAt: z.date().optional(),
  mutationIndex: z.number().int()
}));