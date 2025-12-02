import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateManyCompetitionInputObjectSchema as StudentCreateManyCompetitionInputObjectSchema } from './StudentCreateManyCompetitionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudentCreateManyCompetitionInputObjectSchema), z.lazy(() => StudentCreateManyCompetitionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudentCreateManyCompetitionInputEnvelopeObjectSchema: z.ZodType<Prisma.StudentCreateManyCompetitionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateManyCompetitionInputEnvelope>;
export const StudentCreateManyCompetitionInputEnvelopeObjectZodSchema = makeSchema();
