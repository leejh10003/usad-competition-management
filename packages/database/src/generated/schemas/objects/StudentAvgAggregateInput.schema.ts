import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  gpa: z.literal(true).optional()
}).strict();
export const StudentAvgAggregateInputObjectSchema: z.ZodType<Prisma.StudentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudentAvgAggregateInputType>;
export const StudentAvgAggregateInputObjectZodSchema = makeSchema();
