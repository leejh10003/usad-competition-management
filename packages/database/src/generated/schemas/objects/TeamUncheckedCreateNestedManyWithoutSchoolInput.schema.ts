import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCreateWithoutSchoolInputObjectSchema as TeamCreateWithoutSchoolInputObjectSchema } from './TeamCreateWithoutSchoolInput.schema';
import { TeamUncheckedCreateWithoutSchoolInputObjectSchema as TeamUncheckedCreateWithoutSchoolInputObjectSchema } from './TeamUncheckedCreateWithoutSchoolInput.schema';
import { TeamCreateOrConnectWithoutSchoolInputObjectSchema as TeamCreateOrConnectWithoutSchoolInputObjectSchema } from './TeamCreateOrConnectWithoutSchoolInput.schema';
import { TeamCreateManySchoolInputEnvelopeObjectSchema as TeamCreateManySchoolInputEnvelopeObjectSchema } from './TeamCreateManySchoolInputEnvelope.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutSchoolInputObjectSchema), z.lazy(() => TeamCreateWithoutSchoolInputObjectSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutSchoolInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutSchoolInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TeamCreateOrConnectWithoutSchoolInputObjectSchema), z.lazy(() => TeamCreateOrConnectWithoutSchoolInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TeamCreateManySchoolInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TeamWhereUniqueInputObjectSchema), z.lazy(() => TeamWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TeamUncheckedCreateNestedManyWithoutSchoolInputObjectSchema: z.ZodType<Prisma.TeamUncheckedCreateNestedManyWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUncheckedCreateNestedManyWithoutSchoolInput>;
export const TeamUncheckedCreateNestedManyWithoutSchoolInputObjectZodSchema = makeSchema();
