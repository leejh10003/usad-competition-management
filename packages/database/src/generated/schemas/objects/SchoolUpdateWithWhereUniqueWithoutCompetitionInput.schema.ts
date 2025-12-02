import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolUpdateWithoutCompetitionInputObjectSchema as SchoolUpdateWithoutCompetitionInputObjectSchema } from './SchoolUpdateWithoutCompetitionInput.schema';
import { SchoolUncheckedUpdateWithoutCompetitionInputObjectSchema as SchoolUncheckedUpdateWithoutCompetitionInputObjectSchema } from './SchoolUncheckedUpdateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SchoolUpdateWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutCompetitionInputObjectSchema)])
}).strict();
export const SchoolUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.SchoolUpdateWithWhereUniqueWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateWithWhereUniqueWithoutCompetitionInput>;
export const SchoolUpdateWithWhereUniqueWithoutCompetitionInputObjectZodSchema = makeSchema();
