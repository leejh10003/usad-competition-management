import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutEventsInputObjectSchema as CompetitionCreateWithoutEventsInputObjectSchema } from './CompetitionCreateWithoutEventsInput.schema';
import { CompetitionUncheckedCreateWithoutEventsInputObjectSchema as CompetitionUncheckedCreateWithoutEventsInputObjectSchema } from './CompetitionUncheckedCreateWithoutEventsInput.schema';
import { CompetitionCreateOrConnectWithoutEventsInputObjectSchema as CompetitionCreateOrConnectWithoutEventsInputObjectSchema } from './CompetitionCreateOrConnectWithoutEventsInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionCreateWithoutEventsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompetitionCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => CompetitionWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompetitionCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateNestedOneWithoutEventsInput>;
export const CompetitionCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
