import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCreateWithoutCoachesRelationshipInputObjectSchema as TeamCreateWithoutCoachesRelationshipInputObjectSchema } from './TeamCreateWithoutCoachesRelationshipInput.schema';
import { TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema as TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema } from './TeamUncheckedCreateWithoutCoachesRelationshipInput.schema';
import { TeamCreateOrConnectWithoutCoachesRelationshipInputObjectSchema as TeamCreateOrConnectWithoutCoachesRelationshipInputObjectSchema } from './TeamCreateOrConnectWithoutCoachesRelationshipInput.schema';
import { TeamUpsertWithoutCoachesRelationshipInputObjectSchema as TeamUpsertWithoutCoachesRelationshipInputObjectSchema } from './TeamUpsertWithoutCoachesRelationshipInput.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateToOneWithWhereWithoutCoachesRelationshipInputObjectSchema as TeamUpdateToOneWithWhereWithoutCoachesRelationshipInputObjectSchema } from './TeamUpdateToOneWithWhereWithoutCoachesRelationshipInput.schema';
import { TeamUpdateWithoutCoachesRelationshipInputObjectSchema as TeamUpdateWithoutCoachesRelationshipInputObjectSchema } from './TeamUpdateWithoutCoachesRelationshipInput.schema';
import { TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema as TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema } from './TeamUncheckedUpdateWithoutCoachesRelationshipInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutCoachesRelationshipInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutCoachesRelationshipInputObjectSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutCoachesRelationshipInputObjectSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TeamUpdateToOneWithWhereWithoutCoachesRelationshipInputObjectSchema), z.lazy(() => TeamUpdateWithoutCoachesRelationshipInputObjectSchema), z.lazy(() => TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema)]).optional()
}).strict();
export const TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInputObjectSchema: z.ZodType<Prisma.TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInput>;
export const TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInputObjectZodSchema = makeSchema();
