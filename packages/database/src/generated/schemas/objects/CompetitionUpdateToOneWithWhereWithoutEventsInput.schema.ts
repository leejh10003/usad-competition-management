import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema';
import { CompetitionUpdateWithoutEventsInputObjectSchema as CompetitionUpdateWithoutEventsInputObjectSchema } from './CompetitionUpdateWithoutEventsInput.schema';
import { CompetitionUncheckedUpdateWithoutEventsInputObjectSchema as CompetitionUncheckedUpdateWithoutEventsInputObjectSchema } from './CompetitionUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompetitionUpdateWithoutEventsInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const CompetitionUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateToOneWithWhereWithoutEventsInput>;
export const CompetitionUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
