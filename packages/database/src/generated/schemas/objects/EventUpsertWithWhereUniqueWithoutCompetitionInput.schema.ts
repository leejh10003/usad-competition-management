import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutCompetitionInputObjectSchema as EventUpdateWithoutCompetitionInputObjectSchema } from './EventUpdateWithoutCompetitionInput.schema';
import { EventUncheckedUpdateWithoutCompetitionInputObjectSchema as EventUncheckedUpdateWithoutCompetitionInputObjectSchema } from './EventUncheckedUpdateWithoutCompetitionInput.schema';
import { EventCreateWithoutCompetitionInputObjectSchema as EventCreateWithoutCompetitionInputObjectSchema } from './EventCreateWithoutCompetitionInput.schema';
import { EventUncheckedCreateWithoutCompetitionInputObjectSchema as EventUncheckedCreateWithoutCompetitionInputObjectSchema } from './EventUncheckedCreateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EventUpdateWithoutCompetitionInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutCompetitionInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutCompetitionInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutCompetitionInputObjectSchema)])
}).strict();
export const EventUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutCompetitionInput>;
export const EventUpsertWithWhereUniqueWithoutCompetitionInputObjectZodSchema = makeSchema();
