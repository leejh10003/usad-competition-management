import * as z from 'zod';
// prettier-ignore
export const TeamResultSchema = z.object({
    id: z.string(),
    externalTeamId: z.string().nullable(),
    schoolId: z.string(),
    school: z.unknown(),
    division: z.number().int().nullable(),
    objectiveScore: z.number().nullable(),
    subjectiveScore: z.number().nullable(),
    mutationIndex: z.number().int(),
    coachesRelationship: z.array(z.unknown()),
    students: z.array(z.unknown())
}).strict();

export type TeamResultType = z.infer<typeof TeamResultSchema>;
