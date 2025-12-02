import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';
import { EventUpdateManyMutationInputObjectSchema as EventUpdateManyMutationInputObjectSchema } from './EventUpdateManyMutationInput.schema';
import { EventUncheckedUpdateManyWithoutCompetitionInputObjectSchema as EventUncheckedUpdateManyWithoutCompetitionInputObjectSchema } from './EventUncheckedUpdateManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateManyMutationInputObjectSchema), z.lazy(() => EventUncheckedUpdateManyWithoutCompetitionInputObjectSchema)])
}).strict();
export const EventUpdateManyWithWhereWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventUpdateManyWithWhereWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateManyWithWhereWithoutCompetitionInput>;
export const EventUpdateManyWithWhereWithoutCompetitionInputObjectZodSchema = makeSchema();
