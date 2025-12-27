import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  gpa: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional(),
  objectiveScore: z.literal(true).optional(),
  subjectiveScore: z.literal(true).optional()
}).strict();
export const StudentSumAggregateInputObjectSchema: z.ZodType<Prisma.StudentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudentSumAggregateInputType>;
export const StudentSumAggregateInputObjectZodSchema = makeSchema();
