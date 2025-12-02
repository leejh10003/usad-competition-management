import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutCompetitionInputObjectSchema as EventUpdateWithoutCompetitionInputObjectSchema } from './EventUpdateWithoutCompetitionInput.schema';
import { EventUncheckedUpdateWithoutCompetitionInputObjectSchema as EventUncheckedUpdateWithoutCompetitionInputObjectSchema } from './EventUncheckedUpdateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateWithoutCompetitionInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutCompetitionInputObjectSchema)])
}).strict();
export const EventUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutCompetitionInput>;
export const EventUpdateWithWhereUniqueWithoutCompetitionInputObjectZodSchema = makeSchema();
