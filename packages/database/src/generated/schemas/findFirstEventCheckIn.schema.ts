import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInIncludeObjectSchema as EventCheckInIncludeObjectSchema } from './objects/EventCheckInInclude.schema';
import { EventCheckInOrderByWithRelationInputObjectSchema as EventCheckInOrderByWithRelationInputObjectSchema } from './objects/EventCheckInOrderByWithRelationInput.schema';
import { EventCheckInWhereInputObjectSchema as EventCheckInWhereInputObjectSchema } from './objects/EventCheckInWhereInput.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './objects/EventCheckInWhereUniqueInput.schema';
import { EventCheckInScalarFieldEnumSchema } from './enums/EventCheckInScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EventCheckInFindFirstSelectSchema: z.ZodType<Prisma.EventCheckInSelect> = z.object({
    studentId: z.boolean().optional(),
    student: z.boolean().optional(),
    eventId: z.boolean().optional(),
    event: z.boolean().optional(),
    checkedInAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EventCheckInSelect>;

export const EventCheckInFindFirstSelectZodSchema = z.object({
    studentId: z.boolean().optional(),
    student: z.boolean().optional(),
    eventId: z.boolean().optional(),
    event: z.boolean().optional(),
    checkedInAt: z.boolean().optional()
  }).strict();

export const EventCheckInFindFirstSchema: z.ZodType<Prisma.EventCheckInFindFirstArgs> = z.object({ select: EventCheckInFindFirstSelectSchema.optional(), include: z.lazy(() => EventCheckInIncludeObjectSchema.optional()), orderBy: z.union([EventCheckInOrderByWithRelationInputObjectSchema, EventCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventCheckInWhereInputObjectSchema.optional(), cursor: EventCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventCheckInScalarFieldEnumSchema, EventCheckInScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EventCheckInFindFirstArgs>;

export const EventCheckInFindFirstZodSchema = z.object({ select: EventCheckInFindFirstSelectSchema.optional(), include: z.lazy(() => EventCheckInIncludeObjectSchema.optional()), orderBy: z.union([EventCheckInOrderByWithRelationInputObjectSchema, EventCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventCheckInWhereInputObjectSchema.optional(), cursor: EventCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventCheckInScalarFieldEnumSchema, EventCheckInScalarFieldEnumSchema.array()]).optional() }).strict();