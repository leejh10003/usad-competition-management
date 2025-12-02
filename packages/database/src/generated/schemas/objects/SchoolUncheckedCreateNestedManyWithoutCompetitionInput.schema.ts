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
export const SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.SchoolUncheckedCreateNestedManyWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUncheckedCreateNestedManyWithoutCompetitionInput>;
export const SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectZodSchema = makeSchema();
