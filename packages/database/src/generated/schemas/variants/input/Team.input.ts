import * as z from 'zod';
// prettier-ignore
export const TeamInputSchema = z.object({
    id: z.string(),
    externalTeamId: z.string().optional().nullable(),
    schoolId: z.string(),
    school: z.unknown(),
    division: z.number().int().optional().nullable(),
    objectiveScore: z.number().optional().nullable(),
    subjectiveScore: z.number().optional().nullable(),
    coachesRelationship: z.array(z.unknown()),
    students: z.array(z.unknown())
}).strict();

export type TeamInputType = z.infer<typeof TeamInputSchema>;
