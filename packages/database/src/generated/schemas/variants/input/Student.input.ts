import * as z from 'zod';
import { DivisionSchema } from '../../enums/Division.schema';
import { StateSchema } from '../../enums/State.schema';
import { StudentTypeSchema } from '../../enums/StudentType.schema';
// prettier-ignore
export const StudentInputSchema = z.object({
    id: z.string(),
    externalStudentId: z.string().optional().nullable(),
    division: DivisionSchema,
    gpa: z.number().optional().nullable(),
    firstName: z.string(),
    lastName: z.string(),
    usadPin: z.string().optional().nullable(),
    signature: z.string().optional().nullable(),
    attachmentOnRegistering: z.string().optional().nullable(),
    streetAddress: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    state: StateSchema.optional().nullable(),
    zipCode: z.string().optional().nullable(),
    guardianFirstName: z.string().optional().nullable(),
    guardianLastName: z.string().optional().nullable(),
    guardianPhone: z.string().optional().nullable(),
    guardianEmail: z.string().optional().nullable(),
    mutationIndex: z.number().int(),
    objectiveScore: z.number().optional().nullable(),
    subjectiveScore: z.number().optional().nullable(),
    teamId: z.string().optional().nullable(),
    type: StudentTypeSchema,
    team: z.unknown().optional().nullable(),
    schoolId: z.string().optional().nullable(),
    school: z.unknown().optional().nullable(),
    competitionId: z.string().optional().nullable(),
    competition: z.unknown().optional().nullable(),
    eventCheckIns: z.array(z.unknown())
}).strict();

export type StudentInputType = z.infer<typeof StudentInputSchema>;
