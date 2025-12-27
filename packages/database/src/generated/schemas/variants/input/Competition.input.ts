import * as z from 'zod';
// prettier-ignore
export const CompetitionInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    events: z.array(z.unknown()),
    competitionAvailableStates: z.array(z.unknown()),
    schools: z.array(z.unknown()),
    students: z.array(z.unknown()),
    mutationIndex: z.number().int()
}).strict();

export type CompetitionInputType = z.infer<typeof CompetitionInputSchema>;
