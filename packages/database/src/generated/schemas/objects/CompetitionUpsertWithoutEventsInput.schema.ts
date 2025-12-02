import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionUpdateWithoutEventsInputObjectSchema as CompetitionUpdateWithoutEventsInputObjectSchema } from './CompetitionUpdateWithoutEventsInput.schema';
import { CompetitionUncheckedUpdateWithoutEventsInputObjectSchema as CompetitionUncheckedUpdateWithoutEventsInputObjectSchema } from './CompetitionUncheckedUpdateWithoutEventsInput.schema';
import { CompetitionCreateWithoutEventsInputObjectSchema as CompetitionCreateWithoutEventsInputObjectSchema } from './CompetitionCreateWithoutEventsInput.schema';
import { CompetitionUncheckedCreateWithoutEventsInputObjectSchema as CompetitionUncheckedCreateWithoutEventsInputObjectSchema } from './CompetitionUncheckedCreateWithoutEventsInput.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompetitionUpdateWithoutEventsInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => CompetitionCreateWithoutEventsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => CompetitionWhereInputObjectSchema).optional()
}).strict();
export const CompetitionUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.CompetitionUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpsertWithoutEventsInput>;
export const CompetitionUpsertWithoutEventsInputObjectZodSchema = makeSchema();
