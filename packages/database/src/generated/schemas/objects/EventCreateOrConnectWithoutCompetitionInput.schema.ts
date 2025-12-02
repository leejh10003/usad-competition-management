import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutCompetitionInputObjectSchema as EventCreateWithoutCompetitionInputObjectSchema } from './EventCreateWithoutCompetitionInput.schema';
import { EventUncheckedCreateWithoutCompetitionInputObjectSchema as EventUncheckedCreateWithoutCompetitionInputObjectSchema } from './EventUncheckedCreateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutCompetitionInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutCompetitionInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutCompetitionInput>;
export const EventCreateOrConnectWithoutCompetitionInputObjectZodSchema = makeSchema();
