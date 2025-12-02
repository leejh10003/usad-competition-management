import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StateSchema } from '../enums/State.schema';
import { NullableEnumStateFieldUpdateOperationsInputObjectSchema as NullableEnumStateFieldUpdateOperationsInputObjectSchema } from './NullableEnumStateFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutCompetitionNestedInputObjectSchema as EventUpdateManyWithoutCompetitionNestedInputObjectSchema } from './EventUpdateManyWithoutCompetitionNestedInput.schema';
import { SchoolUpdateManyWithoutCompetitionNestedInputObjectSchema as SchoolUpdateManyWithoutCompetitionNestedInputObjectSchema } from './SchoolUpdateManyWithoutCompetitionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([StateSchema, z.lazy(() => NullableEnumStateFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  events: z.lazy(() => EventUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolUpdateManyWithoutCompetitionNestedInputObjectSchema).optional()
}).strict();
export const CompetitionUpdateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateWithoutStudentsInput>;
export const CompetitionUpdateWithoutStudentsInputObjectZodSchema = makeSchema();
