import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CompetitionUpdatenonRelativeEventsInputObjectSchema as CompetitionUpdatenonRelativeEventsInputObjectSchema } from './CompetitionUpdatenonRelativeEventsInput.schema';
import { NonRelativeEventsSchema } from '../enums/NonRelativeEvents.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StateSchema } from '../enums/State.schema';
import { NullableEnumStateFieldUpdateOperationsInputObjectSchema as NullableEnumStateFieldUpdateOperationsInputObjectSchema } from './NullableEnumStateFieldUpdateOperationsInput.schema';
import { EventUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as EventUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutCompetitionNestedInput.schema';
import { CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionNestedInput.schema';
import { SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './SchoolUncheckedUpdateManyWithoutCompetitionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  round: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nonRelativeEvents: z.union([z.lazy(() => CompetitionUpdatenonRelativeEventsInputObjectSchema), NonRelativeEventsSchema.array()]).optional(),
  streetAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  state: z.union([StateSchema, z.lazy(() => NullableEnumStateFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  zipCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  competitionAvailableStates: z.lazy(() => CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional()
}).strict();
export const CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CompetitionUncheckedUpdateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUncheckedUpdateWithoutStudentsInput>;
export const CompetitionUncheckedUpdateWithoutStudentsInputObjectZodSchema = makeSchema();
