import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const TeamCoachRelationshipUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateManyMutationInput>;
export const TeamCoachRelationshipUpdateManyMutationInputObjectZodSchema = makeSchema();
