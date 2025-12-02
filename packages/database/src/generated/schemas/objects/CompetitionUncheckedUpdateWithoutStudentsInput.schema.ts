import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StateSchema } from '../enums/State.schema';
import { NullableEnumStateFieldUpdateOperationsInputObjectSchema as NullableEnumStateFieldUpdateOperationsInputObjectSchema } from './NullableEnumStateFieldUpdateOperationsInput.schema';
import { EventUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as EventUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutCompetitionNestedInput.schema';
import { SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './SchoolUncheckedUpdateManyWithoutCompetitionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([StateSchema, z.lazy(() => NullableEnumStateFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional()
}).strict();
export const CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CompetitionUncheckedUpdateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUncheckedUpdateWithoutStudentsInput>;
export const CompetitionUncheckedUpdateWithoutStudentsInputObjectZodSchema = makeSchema();
