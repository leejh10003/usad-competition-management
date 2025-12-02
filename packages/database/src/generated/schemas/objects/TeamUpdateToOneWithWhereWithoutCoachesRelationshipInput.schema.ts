import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema';
import { TeamUpdateWithoutCoachesRelationshipInputObjectSchema as TeamUpdateWithoutCoachesRelationshipInputObjectSchema } from './TeamUpdateWithoutCoachesRelationshipInput.schema';
import { TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema as TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema } from './TeamUncheckedUpdateWithoutCoachesRelationshipInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TeamUpdateWithoutCoachesRelationshipInputObjectSchema), z.lazy(() => TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema)])
}).strict();
export const TeamUpdateToOneWithWhereWithoutCoachesRelationshipInputObjectSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutCoachesRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutCoachesRelationshipInput>;
export const TeamUpdateToOneWithWhereWithoutCoachesRelationshipInputObjectZodSchema = makeSchema();
