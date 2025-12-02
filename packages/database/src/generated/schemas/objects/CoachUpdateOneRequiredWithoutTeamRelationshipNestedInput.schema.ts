import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCreateWithoutTeamRelationshipInputObjectSchema as CoachCreateWithoutTeamRelationshipInputObjectSchema } from './CoachCreateWithoutTeamRelationshipInput.schema';
import { CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema as CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema } from './CoachUncheckedCreateWithoutTeamRelationshipInput.schema';
import { CoachCreateOrConnectWithoutTeamRelationshipInputObjectSchema as CoachCreateOrConnectWithoutTeamRelationshipInputObjectSchema } from './CoachCreateOrConnectWithoutTeamRelationshipInput.schema';
import { CoachUpsertWithoutTeamRelationshipInputObjectSchema as CoachUpsertWithoutTeamRelationshipInputObjectSchema } from './CoachUpsertWithoutTeamRelationshipInput.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema';
import { CoachUpdateToOneWithWhereWithoutTeamRelationshipInputObjectSchema as CoachUpdateToOneWithWhereWithoutTeamRelationshipInputObjectSchema } from './CoachUpdateToOneWithWhereWithoutTeamRelationshipInput.schema';
import { CoachUpdateWithoutTeamRelationshipInputObjectSchema as CoachUpdateWithoutTeamRelationshipInputObjectSchema } from './CoachUpdateWithoutTeamRelationshipInput.schema';
import { CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema as CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema } from './CoachUncheckedUpdateWithoutTeamRelationshipInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoachCreateWithoutTeamRelationshipInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CoachCreateOrConnectWithoutTeamRelationshipInputObjectSchema).optional(),
  upsert: z.lazy(() => CoachUpsertWithoutTeamRelationshipInputObjectSchema).optional(),
  connect: z.lazy(() => CoachWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CoachUpdateToOneWithWhereWithoutTeamRelationshipInputObjectSchema), z.lazy(() => CoachUpdateWithoutTeamRelationshipInputObjectSchema), z.lazy(() => CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema)]).optional()
}).strict();
export const CoachUpdateOneRequiredWithoutTeamRelationshipNestedInputObjectSchema: z.ZodType<Prisma.CoachUpdateOneRequiredWithoutTeamRelationshipNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpdateOneRequiredWithoutTeamRelationshipNestedInput>;
export const CoachUpdateOneRequiredWithoutTeamRelationshipNestedInputObjectZodSchema = makeSchema();
