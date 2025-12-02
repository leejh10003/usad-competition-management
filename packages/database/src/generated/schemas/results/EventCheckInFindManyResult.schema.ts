import * as z from 'zod';
export const EventCheckInFindManyResultSchema = z.object({
  data: z.array(z.object({
  studentId: z.string(),
  student: z.unknown(),
  eventId: z.string(),
  event: z.unknown(),
  checkedInAt: z.date().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});