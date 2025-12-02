import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateManyTeamInputObjectSchema as StudentCreateManyTeamInputObjectSchema } from './StudentCreateManyTeamInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudentCreateManyTeamInputObjectSchema), z.lazy(() => StudentCreateManyTeamInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudentCreateManyTeamInputEnvelopeObjectSchema: z.ZodType<Prisma.StudentCreateManyTeamInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateManyTeamInputEnvelope>;
export const StudentCreateManyTeamInputEnvelopeObjectZodSchema = makeSchema();
