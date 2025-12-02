import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema';
import { EventCheckInUpdateWithoutEventInputObjectSchema as EventCheckInUpdateWithoutEventInputObjectSchema } from './EventCheckInUpdateWithoutEventInput.schema';
import { EventCheckInUncheckedUpdateWithoutEventInputObjectSchema as EventCheckInUncheckedUpdateWithoutEventInputObjectSchema } from './EventCheckInUncheckedUpdateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventCheckInWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EventCheckInUpdateWithoutEventInputObjectSchema), z.lazy(() => EventCheckInUncheckedUpdateWithoutEventInputObjectSchema)])
}).strict();
export const EventCheckInUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateWithWhereUniqueWithoutEventInput>;
export const EventCheckInUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
