import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutCompetitionNestedInputObjectSchema as EventUpdateManyWithoutCompetitionNestedInputObjectSchema } from './EventUpdateManyWithoutCompetitionNestedInput.schema';
import { SchoolUpdateManyWithoutCompetitionNestedInputObjectSchema as SchoolUpdateManyWithoutCompetitionNestedInputObjectSchema } from './SchoolUpdateManyWithoutCompetitionNestedInput.schema';
import { StudentUpdateManyWithoutCompetitionNestedInputObjectSchema as StudentUpdateManyWithoutCompetitionNestedInputObjectSchema } from './StudentUpdateManyWithoutCompetitionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutCompetitionNestedInputObjectSchema).optional()
}).strict();
export const CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateWithoutCompetitionAvailableStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateWithoutCompetitionAvailableStatesInput>;
export const CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectZodSchema = makeSchema();
