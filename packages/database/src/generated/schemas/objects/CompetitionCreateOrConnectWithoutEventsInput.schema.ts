import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema';
import { CompetitionCreateWithoutEventsInputObjectSchema as CompetitionCreateWithoutEventsInputObjectSchema } from './CompetitionCreateWithoutEventsInput.schema';
import { CompetitionUncheckedCreateWithoutEventsInputObjectSchema as CompetitionUncheckedCreateWithoutEventsInputObjectSchema } from './CompetitionUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompetitionCreateWithoutEventsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const CompetitionCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateOrConnectWithoutEventsInput>;
export const CompetitionCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
