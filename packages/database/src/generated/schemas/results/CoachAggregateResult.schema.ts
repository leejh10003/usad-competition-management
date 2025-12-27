import * as z from 'zod';
export const CoachAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    externalCoachId: z.number(),
    firstName: z.number(),
    lastName: z.number(),
    email: z.number(),
    phone: z.number(),
    signature: z.number(),
    mutationIndex: z.number(),
    schoolId: z.number(),
    school: z.number(),
    primarySchool: z.number(),
    teamRelationship: z.number()
  }).optional(),
  _sum: z.object({
    mutationIndex: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    mutationIndex: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    externalCoachId: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    signature: z.string().nullable(),
    mutationIndex: z.number().int().nullable(),
    schoolId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    externalCoachId: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    signature: z.string().nullable(),
    mutationIndex: z.number().int().nullable(),
    schoolId: z.string().nullable()
  }).nullable().optional()});