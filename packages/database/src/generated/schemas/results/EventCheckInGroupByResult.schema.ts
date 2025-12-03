import * as z from 'zod';
export const EventCheckInGroupByResultSchema = z.array(z.object({
  studentId: z.string(),
  eventId: z.string(),
  checkedInAt: z.date(),
  mutationIndex: z.number().int(),
  _count: z.object({
    studentId: z.number(),
    student: z.number(),
    eventId: z.number(),
    event: z.number(),
    checkedInAt: z.number(),
    mutationIndex: z.number()
  }).optional(),
  _sum: z.object({
    mutationIndex: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    mutationIndex: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    studentId: z.string().nullable(),
    eventId: z.string().nullable(),
    checkedInAt: z.date().nullable(),
    mutationIndex: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    studentId: z.string().nullable(),
    eventId: z.string().nullable(),
    checkedInAt: z.date().nullable(),
    mutationIndex: z.number().int().nullable()
  }).nullable().optional()
}));