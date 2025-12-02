import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutCompetitionInputObjectSchema as SchoolCreateWithoutCompetitionInputObjectSchema } from './SchoolCreateWithoutCompetitionInput.schema';
import { SchoolUncheckedCreateWithoutCompetitionInputObjectSchema as SchoolUncheckedCreateWithoutCompetitionInputObjectSchema } from './SchoolUncheckedCreateWithoutCompetitionInput.schema';
import { SchoolCreateOrConnectWithoutCompetitionInputObjectSchema as SchoolCreateOrConnectWithoutCompetitionInputObjectSchema } from './SchoolCreateOrConnectWithoutCompetitionInput.schema';
import { SchoolCreateManyCompetitionInputEnvelopeObjectSchema as SchoolCreateManyCompetitionInputEnvelopeObjectSchema } from './SchoolCreateManyCompetitionInputEnvelope.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolCreateWithoutCompetitionInputObjectSchema).array(), z.lazy(() => SchoolUncheckedCreateWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutCompetitionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SchoolCreateOrConnectWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolCreateOrConnectWithoutCompetitionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SchoolCreateManyCompetitionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SchoolWhereUniqueInputObjectSchema), z.lazy(() => SchoolWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SchoolCreateNestedManyWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.SchoolCreateNestedManyWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateNestedManyWithoutCompetitionInput>;
export const SchoolCreateNestedManyWithoutCompetitionInputObjectZodSchema = makeSchema();
