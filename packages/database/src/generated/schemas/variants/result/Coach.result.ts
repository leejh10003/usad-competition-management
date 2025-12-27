import * as z from 'zod';
// prettier-ignore
export const CoachResultSchema = z.object({
    id: z.string(),
    externalCoachId: z.string().nullable(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string().nullable(),
    signature: z.string().nullable(),
    mutationIndex: z.number().int(),
    schoolId: z.string(),
    school: z.unknown(),
    primarySchool: z.unknown().nullable(),
    teamRelationship: z.array(z.unknown())
}).strict();

export type CoachResultType = z.infer<typeof CoachResultSchema>;
