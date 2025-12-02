import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TeamOrderByWithRelationInputObjectSchema as TeamOrderByWithRelationInputObjectSchema } from './TeamOrderByWithRelationInput.schema';
import { CoachOrderByWithRelationInputObjectSchema as CoachOrderByWithRelationInputObjectSchema } from './CoachOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  teamId: SortOrderSchema.optional(),
  coachId: SortOrderSchema.optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputObjectSchema).optional(),
  coach: z.lazy(() => CoachOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TeamCoachRelationshipOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipOrderByWithRelationInput>;
export const TeamCoachRelationshipOrderByWithRelationInputObjectZodSchema = makeSchema();
