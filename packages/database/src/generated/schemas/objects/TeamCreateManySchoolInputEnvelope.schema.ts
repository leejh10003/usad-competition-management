import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCreateManySchoolInputObjectSchema as TeamCreateManySchoolInputObjectSchema } from './TeamCreateManySchoolInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TeamCreateManySchoolInputObjectSchema), z.lazy(() => TeamCreateManySchoolInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TeamCreateManySchoolInputEnvelopeObjectSchema: z.ZodType<Prisma.TeamCreateManySchoolInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateManySchoolInputEnvelope>;
export const TeamCreateManySchoolInputEnvelopeObjectZodSchema = makeSchema();
