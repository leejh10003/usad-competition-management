import * as z from 'zod';
export const SchoolAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    externalSchoolId: z.number(),
    name: z.number(),
    isVirtual: z.number(),
    streetAddress: z.number(),
    city: z.number(),
    state: z.number(),
    zipCode: z.number(),
    phone: z.number(),
    principalName: z.number(),
    principalEmail: z.number(),
    primaryCoachId: z.number(),
    primaryCoach: z.number(),
    emailDomain: z.number(),
    division: z.number(),
    competitionId: z.number(),
    competition: z.number(),
    coaches: z.number(),
    teams: z.number(),
    students: z.number()
  }).optional(),
  _sum: z.object({
    division: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    division: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    externalSchoolId: z.string().nullable(),
    name: z.string().nullable(),
    streetAddress: z.string().nullable(),
    city: z.string().nullable(),
    zipCode: z.string().nullable(),
    phone: z.string().nullable(),
    principalName: z.string().nullable(),
    principalEmail: z.string().nullable(),
    primaryCoachId: z.string().nullable(),
    emailDomain: z.string().nullable(),
    division: z.number().int().nullable(),
    competitionId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    externalSchoolId: z.string().nullable(),
    name: z.string().nullable(),
    streetAddress: z.string().nullable(),
    city: z.string().nullable(),
    zipCode: z.string().nullable(),
    phone: z.string().nullable(),
    principalName: z.string().nullable(),
    principalEmail: z.string().nullable(),
    primaryCoachId: z.string().nullable(),
    emailDomain: z.string().nullable(),
    division: z.number().int().nullable(),
    competitionId: z.string().nullable()
  }).nullable().optional()});