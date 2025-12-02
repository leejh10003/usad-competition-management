import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamUpdateWithoutCoachesRelationshipInputObjectSchema as TeamUpdateWithoutCoachesRelationshipInputObjectSchema } from './TeamUpdateWithoutCoachesRelationshipInput.schema';
import { TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema as TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema } from './TeamUncheckedUpdateWithoutCoachesRelationshipInput.schema';
import { TeamCreateWithoutCoachesRelationshipInputObjectSchema as TeamCreateWithoutCoachesRelationshipInputObjectSchema } from './TeamCreateWithoutCoachesRelationshipInput.schema';
import { TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema as TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema } from './TeamUncheckedCreateWithoutCoachesRelationshipInput.schema';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TeamUpdateWithoutCoachesRelationshipInputObjectSchema), z.lazy(() => TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema)]),
  create: z.union([z.lazy(() => TeamCreateWithoutCoachesRelationshipInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema)]),
  where: z.lazy(() => TeamWhereInputObjectSchema).optional()
}).strict();
export const TeamUpsertWithoutCoachesRelationshipInputObjectSchema: z.ZodType<Prisma.TeamUpsertWithoutCoachesRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpsertWithoutCoachesRelationshipInput>;
export const TeamUpsertWithoutCoachesRelationshipInputObjectZodSchema = makeSchema();
