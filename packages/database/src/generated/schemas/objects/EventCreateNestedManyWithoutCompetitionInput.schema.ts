import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutCompetitionInputObjectSchema as EventCreateWithoutCompetitionInputObjectSchema } from './EventCreateWithoutCompetitionInput.schema';
import { EventUncheckedCreateWithoutCompetitionInputObjectSchema as EventUncheckedCreateWithoutCompetitionInputObjectSchema } from './EventUncheckedCreateWithoutCompetitionInput.schema';
import { EventCreateOrConnectWithoutCompetitionInputObjectSchema as EventCreateOrConnectWithoutCompetitionInputObjectSchema } from './EventCreateOrConnectWithoutCompetitionInput.schema';
import { EventCreateManyCompetitionInputEnvelopeObjectSchema as EventCreateManyCompetitionInputEnvelopeObjectSchema } from './EventCreateManyCompetitionInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutCompetitionInputObjectSchema), z.lazy(() => EventCreateWithoutCompetitionInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutCompetitionInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutCompetitionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutCompetitionInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutCompetitionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyCompetitionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EventCreateNestedManyWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventCreateNestedManyWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedManyWithoutCompetitionInput>;
export const EventCreateNestedManyWithoutCompetitionInputObjectZodSchema = makeSchema();
