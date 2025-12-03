import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  externalCoachId: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  email: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  signature: z.literal(true).optional(),
  objectiveScore: z.literal(true).optional(),
  subjectiveScore: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional(),
  schoolId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CoachCountAggregateInputObjectSchema: z.ZodType<Prisma.CoachCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CoachCountAggregateInputType>;
export const CoachCountAggregateInputObjectZodSchema = makeSchema();
