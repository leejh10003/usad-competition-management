import * as z from 'zod';
import { DivisionSchema } from '../../enums/Division.schema';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const StudentResultSchema = z.object({
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
    teamId: z.string().nullable(),
    team: z.unknown().nullable(),
    schoolId: z.string().nullable(),
    school: z.unknown().nullable(),
    competitionId: z.string().nullable(),
    competition: z.unknown().nullable(),
    eventCheckIns: z.array(z.unknown())
}).strict();

export type StudentResultType = z.infer<typeof StudentResultSchema>;
