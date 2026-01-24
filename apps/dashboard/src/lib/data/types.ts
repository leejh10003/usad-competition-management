import type { coachResponseSchema, competitionResponseItemSchema, eventResponseItemSchema, teamResponseItemSchema } from "usad-scheme";
import type { schoolResponseItemSchema } from "usad-scheme/src/school/response";
import type { studentResponseItemSchema } from "usad-scheme/src/student";
import type z from "zod";
type CompetitionResponseItem = z.infer<typeof competitionResponseItemSchema>;
type EventResponseItem = z.infer<typeof eventResponseItemSchema>;
type CompetitionListItem = CompetitionResponseItem & {events: EventResponseItem[]};
type CoachResponseItem = z.infer<typeof coachResponseSchema>['coach'];
type SchoolResponseItem = z.infer<typeof schoolResponseItemSchema>;
type SchoolsAgregatedItem = {
    school: SchoolResponseItem;
    competition: CompetitionResponseItem;
}
type CoachAggregatedItem = {
    coach: CoachResponseItem;
    school: SchoolsAgregatedItem;
}
type EventAggregatedItem = {
    event: EventResponseItem;
    competition: CompetitionResponseItem;
};
type TeamResponseItem = z.infer<typeof teamResponseItemSchema>;
type TeamAggregatedItem = {
    team: TeamResponseItem;
    school: SchoolsAgregatedItem;
};
type StudentResponseItem = z.infer<typeof studentResponseItemSchema>;
type StudentAggregatedItem = {
    student: StudentResponseItem;
    team: TeamAggregatedItem | null;
    school: SchoolsAgregatedItem | null;
}
export type { CompetitionResponseItem, EventResponseItem, CompetitionListItem, CoachResponseItem, SchoolResponseItem, SchoolsAgregatedItem, CoachAggregatedItem, EventAggregatedItem, TeamResponseItem, TeamAggregatedItem, StudentResponseItem, StudentAggregatedItem };