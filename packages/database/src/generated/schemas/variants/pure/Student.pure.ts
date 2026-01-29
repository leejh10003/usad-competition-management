import * as z from 'zod';
import { DivisionSchema } from '../../enums/Division.schema';
import { StateSchema } from '../../enums/State.schema';
import { StudentTypeSchema } from '../../enums/StudentType.schema';
// prettier-ignore
export const StudentModelSchema = z.object({
    id: z.string(),
    externalStudentId: z.string().nullable(),
    division: DivisionSchema,
    gpa: z.number().nullable(),
    firstName: z.string(),
    lastName: z.string(),
    usadPin: z.string().nullable(),
    signature: z.string().nullable(),
    attachmentOnRegistering: z.string().nullable(),
    streetAddress: z.string().nullable(),
    city: z.string().nullable(),
    state: StateSchema.nullable(),
    zipCode: z.string().nullable(),
    guardianFirstName: z.string().nullable(),
    guardianLastName: z.string().nullable(),
    guardianPhone: z.string().nullable(),
    guardianEmail: z.string().nullable(),
    mutationIndex: z.number().int(),
    objectiveScore: z.number().nullable(),
    subjectiveScore: z.number().nullable(),
    teamId: z.string().nullable(),
    type: StudentTypeSchema,
    team: z.unknown().nullable(),
    schoolId: z.string().nullable(),
    school: z.unknown().nullable(),
    competitionId: z.string().nullable(),
    competition: z.unknown().nullable(),
    eventCheckIns: z.array(z.unknown())
}).strict();

export type StudentPureType = z.infer<typeof StudentModelSchema>;
