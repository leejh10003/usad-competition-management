import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamCreateWithoutCoachesRelationshipInputObjectSchema as TeamCreateWithoutCoachesRelationshipInputObjectSchema } from './TeamCreateWithoutCoachesRelationshipInput.schema';
import { TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema as TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema } from './TeamUncheckedCreateWithoutCoachesRelationshipInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TeamCreateWithoutCoachesRelationshipInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema)])
}).strict();
export const TeamCreateOrConnectWithoutCoachesRelationshipInputObjectSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutCoachesRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateOrConnectWithoutCoachesRelationshipInput>;
export const TeamCreateOrConnectWithoutCoachesRelationshipInputObjectZodSchema = makeSchema();
