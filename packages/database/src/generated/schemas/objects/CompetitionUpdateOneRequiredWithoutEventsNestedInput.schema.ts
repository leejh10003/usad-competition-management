import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutEventsInputObjectSchema as CompetitionCreateWithoutEventsInputObjectSchema } from './CompetitionCreateWithoutEventsInput.schema';
import { CompetitionUncheckedCreateWithoutEventsInputObjectSchema as CompetitionUncheckedCreateWithoutEventsInputObjectSchema } from './CompetitionUncheckedCreateWithoutEventsInput.schema';
import { CompetitionCreateOrConnectWithoutEventsInputObjectSchema as CompetitionCreateOrConnectWithoutEventsInputObjectSchema } from './CompetitionCreateOrConnectWithoutEventsInput.schema';
import { CompetitionUpsertWithoutEventsInputObjectSchema as CompetitionUpsertWithoutEventsInputObjectSchema } from './CompetitionUpsertWithoutEventsInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateToOneWithWhereWithoutEventsInputObjectSchema as CompetitionUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './CompetitionUpdateToOneWithWhereWithoutEventsInput.schema';
import { CompetitionUpdateWithoutEventsInputObjectSchema as CompetitionUpdateWithoutEventsInputObjectSchema } from './CompetitionUpdateWithoutEventsInput.schema';
import { CompetitionUncheckedUpdateWithoutEventsInputObjectSchema as CompetitionUncheckedUpdateWithoutEventsInputObjectSchema } from './CompetitionUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionCreateWithoutEventsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompetitionCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => CompetitionUpsertWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => CompetitionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompetitionUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => CompetitionUpdateWithoutEventsInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const CompetitionUpdateOneRequiredWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateOneRequiredWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateOneRequiredWithoutEventsNestedInput>;
export const CompetitionUpdateOneRequiredWithoutEventsNestedInputObjectZodSchema = makeSchema();
