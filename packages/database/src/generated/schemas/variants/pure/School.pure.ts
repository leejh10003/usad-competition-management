import * as z from 'zod';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const SchoolModelSchema = z.object({
    id: z.string(),
    externalSchoolId: z.string().nullable(),
    name: z.string(),
    isVirtual: z.boolean(),
    streetAddress: z.string().nullable(),
    city: z.string().nullable(),
    state: StateSchema.nullable(),
    zipCode: z.string().nullable(),
    phone: z.string().nullable(),
    principalName: z.string().nullable(),
    principalEmail: z.string().nullable(),
    objectiveScore: z.number().nullable(),
    subjectiveScore: z.number().nullable(),
    primaryCoachId: z.string().nullable(),
    primaryCoach: z.unknown().nullable(),
    emailDomain: z.string().nullable(),
    division: z.number().int().nullable(),
    competitionId: z.string(),
    mutationIndex: z.number().int(),
    competition: z.unknown(),
    coaches: z.array(z.unknown()),
    teams: z.array(z.unknown()),
    students: z.array(z.unknown())
}).strict();

export type SchoolPureType = z.infer<typeof SchoolModelSchema>;
