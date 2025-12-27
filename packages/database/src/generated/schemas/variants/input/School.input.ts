import * as z from 'zod';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const SchoolInputSchema = z.object({
    id: z.string(),
    externalSchoolId: z.string().optional().nullable(),
    name: z.string(),
    isVirtual: z.boolean(),
    streetAddress: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    state: StateSchema.optional().nullable(),
    zipCode: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    principalName: z.string().optional().nullable(),
    principalEmail: z.string().optional().nullable(),
    objectiveScore: z.number().optional().nullable(),
    subjectiveScore: z.number().optional().nullable(),
    primaryCoachId: z.string().optional().nullable(),
    primaryCoach: z.unknown().optional().nullable(),
    emailDomain: z.string().optional().nullable(),
    division: z.number().int().optional().nullable(),
    competitionId: z.string(),
    mutationIndex: z.number().int(),
    competition: z.unknown(),
    coaches: z.array(z.unknown()),
    teams: z.array(z.unknown()),
    students: z.array(z.unknown())
}).strict();

export type SchoolInputType = z.infer<typeof SchoolInputSchema>;
