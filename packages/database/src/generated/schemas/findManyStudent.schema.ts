import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StudentIncludeObjectSchema as StudentIncludeObjectSchema } from './objects/StudentInclude.schema';
import { StudentOrderByWithRelationInputObjectSchema as StudentOrderByWithRelationInputObjectSchema } from './objects/StudentOrderByWithRelationInput.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';
import { StudentScalarFieldEnumSchema } from './enums/StudentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudentFindManySelectSchema: z.ZodType<Prisma.StudentSelect> = z.object({
    id: z.boolean().optional(),
    externalStudentId: z.boolean().optional(),
    division: z.boolean().optional(),
    gpa: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    usadPin: z.boolean().optional(),
    signature: z.boolean().optional(),
    attachmentOnRegistering: z.boolean().optional(),
    streetAddress: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zipCode: z.boolean().optional(),
    guardianFirstName: z.boolean().optional(),
    guardianLastName: z.boolean().optional(),
    guardianPhone: z.boolean().optional(),
    guardianEmail: z.boolean().optional(),
    teamId: z.boolean().optional(),
    team: z.boolean().optional(),
    schoolId: z.boolean().optional(),
    school: z.boolean().optional(),
    competitionId: z.boolean().optional(),
    competition: z.boolean().optional(),
    eventCheckIns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StudentSelect>;

export const StudentFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    externalStudentId: z.boolean().optional(),
    division: z.boolean().optional(),
    gpa: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    usadPin: z.boolean().optional(),
    signature: z.boolean().optional(),
    attachmentOnRegistering: z.boolean().optional(),
    streetAddress: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zipCode: z.boolean().optional(),
    guardianFirstName: z.boolean().optional(),
    guardianLastName: z.boolean().optional(),
    guardianPhone: z.boolean().optional(),
    guardianEmail: z.boolean().optional(),
    teamId: z.boolean().optional(),
    team: z.boolean().optional(),
    schoolId: z.boolean().optional(),
    school: z.boolean().optional(),
    competitionId: z.boolean().optional(),
    competition: z.boolean().optional(),
    eventCheckIns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const StudentFindManySchema: z.ZodType<Prisma.StudentFindManyArgs> = z.object({ select: StudentFindManySelectSchema.optional(), include: z.lazy(() => StudentIncludeObjectSchema.optional()), orderBy: z.union([StudentOrderByWithRelationInputObjectSchema, StudentOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentWhereInputObjectSchema.optional(), cursor: StudentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentScalarFieldEnumSchema, StudentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudentFindManyArgs>;

export const StudentFindManyZodSchema = z.object({ select: StudentFindManySelectSchema.optional(), include: z.lazy(() => StudentIncludeObjectSchema.optional()), orderBy: z.union([StudentOrderByWithRelationInputObjectSchema, StudentOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentWhereInputObjectSchema.optional(), cursor: StudentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentScalarFieldEnumSchema, StudentScalarFieldEnumSchema.array()]).optional() }).strict();