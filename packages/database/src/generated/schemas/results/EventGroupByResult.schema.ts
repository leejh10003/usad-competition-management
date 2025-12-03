import * as z from 'zod';
export const EventGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
  competitionId: z.string(),
  mutationIndex: z.number().int(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    startsAt: z.number(),
    endsAt: z.number(),
    competitionId: z.number(),
    mutationIndex: z.number(),
    competition: z.number(),
    eventCheckIn: z.number()
  }).optional(),
  _sum: z.object({
    mutationIndex: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    mutationIndex: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    startsAt: z.date().nullable(),
    endsAt: z.date().nullable(),
    competitionId: z.string().nullable(),
    mutationIndex: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    startsAt: z.date().nullable(),
    endsAt: z.date().nullable(),
    competitionId: z.string().nullable(),
    mutationIndex: z.number().int().nullable()
  }).nullable().optional()
}));