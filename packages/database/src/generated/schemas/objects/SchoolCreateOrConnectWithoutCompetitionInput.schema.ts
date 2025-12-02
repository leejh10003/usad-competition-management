import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolCreateWithoutCompetitionInputObjectSchema as SchoolCreateWithoutCompetitionInputObjectSchema } from './SchoolCreateWithoutCompetitionInput.schema';
import { SchoolUncheckedCreateWithoutCompetitionInputObjectSchema as SchoolUncheckedCreateWithoutCompetitionInputObjectSchema } from './SchoolUncheckedCreateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SchoolCreateWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutCompetitionInputObjectSchema)])
}).strict();
export const SchoolCreateOrConnectWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.SchoolCreateOrConnectWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateOrConnectWithoutCompetitionInput>;
export const SchoolCreateOrConnectWithoutCompetitionInputObjectZodSchema = makeSchema();
