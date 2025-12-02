import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCreateWithoutCoachesRelationshipInputObjectSchema as TeamCreateWithoutCoachesRelationshipInputObjectSchema } from './TeamCreateWithoutCoachesRelationshipInput.schema';
import { TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema as TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema } from './TeamUncheckedCreateWithoutCoachesRelationshipInput.schema';
import { TeamCreateOrConnectWithoutCoachesRelationshipInputObjectSchema as TeamCreateOrConnectWithoutCoachesRelationshipInputObjectSchema } from './TeamCreateOrConnectWithoutCoachesRelationshipInput.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutCoachesRelationshipInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutCoachesRelationshipInputObjectSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputObjectSchema).optional()
}).strict();
export const TeamCreateNestedOneWithoutCoachesRelationshipInputObjectSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutCoachesRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateNestedOneWithoutCoachesRelationshipInput>;
export const TeamCreateNestedOneWithoutCoachesRelationshipInputObjectZodSchema = makeSchema();
