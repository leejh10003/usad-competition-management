import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  externalTeamId: z.string().optional().nullable(),
  division: z.number().int().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable()
}).strict();
export const TeamCreateManySchoolInputObjectSchema: z.ZodType<Prisma.TeamCreateManySchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateManySchoolInput>;
export const TeamCreateManySchoolInputObjectZodSchema = makeSchema();
