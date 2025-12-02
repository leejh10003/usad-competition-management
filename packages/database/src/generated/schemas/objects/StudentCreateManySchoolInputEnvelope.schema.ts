import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateManySchoolInputObjectSchema as StudentCreateManySchoolInputObjectSchema } from './StudentCreateManySchoolInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudentCreateManySchoolInputObjectSchema), z.lazy(() => StudentCreateManySchoolInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudentCreateManySchoolInputEnvelopeObjectSchema: z.ZodType<Prisma.StudentCreateManySchoolInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateManySchoolInputEnvelope>;
export const StudentCreateManySchoolInputEnvelopeObjectZodSchema = makeSchema();
