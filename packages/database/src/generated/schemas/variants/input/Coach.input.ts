import * as z from 'zod';
// prettier-ignore
export const CoachInputSchema = z.object({
    id: z.string(),
    externalCoachId: z.string().optional().nullable(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string().optional().nullable(),
    signature: z.string().optional().nullable(),
    objectiveScore: z.number().optional().nullable(),
    subjectiveScore: z.number().optional().nullable(),
    mutationIndex: z.number().int(),
    schoolId: z.string(),
    school: z.unknown(),
    primarySchool: z.unknown().optional().nullable(),
    teamRelationship: z.array(z.unknown())
}).strict();

export type CoachInputType = z.infer<typeof CoachInputSchema>;
