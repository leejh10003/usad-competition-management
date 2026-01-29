import * as z from 'zod';
export const EventAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    competitionId: z.number(),
    mutationIndex: z.number(),
    competition: z.number(),
    type: z.number(),
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
    competitionId: z.string().nullable(),
    mutationIndex: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    competitionId: z.string().nullable(),
    mutationIndex: z.number().int().nullable()
  }).nullable().optional()});