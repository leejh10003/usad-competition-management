import * as z from 'zod';
export const TeamGroupByResultSchema = z.array(z.object({
  id: z.string(),
  externalTeamId: z.string(),
  schoolId: z.string(),
  division: z.number().int(),
  objectiveScore: z.number(),
  subjectiveScore: z.number(),
  mutationIndex: z.number().int(),
  _count: z.object({
    id: z.number(),
    externalTeamId: z.number(),
    schoolId: z.number(),
    school: z.number(),
    division: z.number(),
    objectiveScore: z.number(),
    subjectiveScore: z.number(),
    mutationIndex: z.number(),
    coachesRelationship: z.number(),
    students: z.number()
  }).optional(),
  _sum: z.object({
    division: z.number().nullable(),
    objectiveScore: z.number().nullable(),
    subjectiveScore: z.number().nullable(),
    mutationIndex: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    division: z.number().nullable(),
    objectiveScore: z.number().nullable(),
    subjectiveScore: z.number().nullable(),
    mutationIndex: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    externalTeamId: z.string().nullable(),
    schoolId: z.string().nullable(),
    division: z.number().int().nullable(),
    objectiveScore: z.number().nullable(),
    subjectiveScore: z.number().nullable(),
    mutationIndex: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    externalTeamId: z.string().nullable(),
    schoolId: z.string().nullable(),
    division: z.number().int().nullable(),
    objectiveScore: z.number().nullable(),
    subjectiveScore: z.number().nullable(),
    mutationIndex: z.number().int().nullable()
  }).nullable().optional()
}));