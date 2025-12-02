import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema';
import { EventCheckInUpdateWithoutEventInputObjectSchema as EventCheckInUpdateWithoutEventInputObjectSchema } from './EventCheckInUpdateWithoutEventInput.schema';
import { EventCheckInUncheckedUpdateWithoutEventInputObjectSchema as EventCheckInUncheckedUpdateWithoutEventInputObjectSchema } from './EventCheckInUncheckedUpdateWithoutEventInput.schema';
import { EventCheckInCreateWithoutEventInputObjectSchema as EventCheckInCreateWithoutEventInputObjectSchema } from './EventCheckInCreateWithoutEventInput.schema';
import { EventCheckInUncheckedCreateWithoutEventInputObjectSchema as EventCheckInUncheckedCreateWithoutEventInputObjectSchema } from './EventCheckInUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventCheckInWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EventCheckInUpdateWithoutEventInputObjectSchema), z.lazy(() => EventCheckInUncheckedUpdateWithoutEventInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCheckInCreateWithoutEventInputObjectSchema), z.lazy(() => EventCheckInUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const EventCheckInUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.EventCheckInUpsertWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpsertWithWhereUniqueWithoutEventInput>;
export const EventCheckInUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
