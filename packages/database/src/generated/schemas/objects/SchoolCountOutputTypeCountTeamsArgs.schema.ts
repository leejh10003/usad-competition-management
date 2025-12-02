import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamWhereInputObjectSchema).optional()
}).strict();
export const SchoolCountOutputTypeCountTeamsArgsObjectSchema = makeSchema();
export const SchoolCountOutputTypeCountTeamsArgsObjectZodSchema = makeSchema();
