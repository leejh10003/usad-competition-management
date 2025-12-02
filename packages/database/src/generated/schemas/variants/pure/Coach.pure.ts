import * as z from 'zod';
// prettier-ignore
export const CoachModelSchema = z.object({
    id: z.string(),
    externalCoachId: z.string().nullable(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string().nullable(),
    signature: z.string().nullable(),
    objectiveScore: z.number().nullable(),
    subjectiveScore: z.number().nullable(),
    schoolId: z.string(),
    school: z.unknown(),
    primarySchool: z.unknown().nullable(),
    teamRelationship: z.array(z.unknown())
}).strict();

export type CoachPureType = z.infer<typeof CoachModelSchema>;
