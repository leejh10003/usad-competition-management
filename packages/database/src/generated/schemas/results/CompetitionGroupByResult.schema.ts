import * as z from 'zod';
export const CompetitionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
  mutationIndex: z.number().int(),
  round: z.number().int(),
  streetAddress: z.string(),
  city: z.string(),
  zipCode: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    startsAt: z.number(),
    endsAt: z.number(),
    events: z.number(),
    competitionAvailableStates: z.number(),
    schools: z.number(),
    students: z.number(),
    mutationIndex: z.number(),
    round: z.number(),
    nonRelativeEvents: z.number(),
    streetAddress: z.number(),
    city: z.number(),
    state: z.number(),
    zipCode: z.number()
  }).optional(),
  _sum: z.object({
    mutationIndex: z.number().nullable(),
    round: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    mutationIndex: z.number().nullable(),
    round: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    startsAt: z.date().nullable(),
    endsAt: z.date().nullable(),
    mutationIndex: z.number().int().nullable(),
    round: z.number().int().nullable(),
    streetAddress: z.string().nullable(),
    city: z.string().nullable(),
    zipCode: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    startsAt: z.date().nullable(),
    endsAt: z.date().nullable(),
    mutationIndex: z.number().int().nullable(),
    round: z.number().int().nullable(),
    streetAddress: z.string().nullable(),
    city: z.string().nullable(),
    zipCode: z.string().nullable()
  }).nullable().optional()
}));