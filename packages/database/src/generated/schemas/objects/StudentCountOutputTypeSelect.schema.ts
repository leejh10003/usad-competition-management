import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCountOutputTypeCountEventCheckInsArgsObjectSchema as StudentCountOutputTypeCountEventCheckInsArgsObjectSchema } from './StudentCountOutputTypeCountEventCheckInsArgs.schema'

const makeSchema = () => z.object({
  eventCheckIns: z.union([z.boolean(), z.lazy(() => StudentCountOutputTypeCountEventCheckInsArgsObjectSchema)]).optional()
}).strict();
export const StudentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StudentCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StudentCountOutputTypeSelect>;
export const StudentCountOutputTypeSelectObjectZodSchema = makeSchema();
