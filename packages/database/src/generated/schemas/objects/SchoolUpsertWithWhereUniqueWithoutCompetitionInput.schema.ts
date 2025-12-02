import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolUpdateWithoutCompetitionInputObjectSchema as SchoolUpdateWithoutCompetitionInputObjectSchema } from './SchoolUpdateWithoutCompetitionInput.schema';
import { SchoolUncheckedUpdateWithoutCompetitionInputObjectSchema as SchoolUncheckedUpdateWithoutCompetitionInputObjectSchema } from './SchoolUncheckedUpdateWithoutCompetitionInput.schema';
import { SchoolCreateWithoutCompetitionInputObjectSchema as SchoolCreateWithoutCompetitionInputObjectSchema } from './SchoolCreateWithoutCompetitionInput.schema';
import { SchoolUncheckedCreateWithoutCompetitionInputObjectSchema as SchoolUncheckedCreateWithoutCompetitionInputObjectSchema } from './SchoolUncheckedCreateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SchoolUpdateWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutCompetitionInputObjectSchema)]),
  create: z.union([z.lazy(() => SchoolCreateWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutCompetitionInputObjectSchema)])
}).strict();
export const SchoolUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.SchoolUpsertWithWhereUniqueWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpsertWithWhereUniqueWithoutCompetitionInput>;
export const SchoolUpsertWithWhereUniqueWithoutCompetitionInputObjectZodSchema = makeSchema();
