import {
  coachesInsertSchema,
  coachInsertSchema,
  coachResponseItemSchema,
} from "./coach";
import {
  schoolInsertSchema,
  schoolResponseItemSchema,
  schoolsInsertSchema,
} from "./school";
import {
  studentInsertSchema,
  studentResponseItemSchema,
  studentsInsertSchema,
} from "./student";
import {
  teamInsertSchema,
  teamResponseItemSchema,
  teamsInsertSchema,
} from "./team";
import { z } from "@hono/zod-openapi";

export {
  coachSelectFieldsSchema,
  coachQuerySchema,
  coachUpdateSchema,
  coachesUpdateSchema,
  coachInsertSchema,
  coachesInsertSchema,
  coachResponseSchema,
  coachesResponseSchema,
} from "./coach";
export {
  schoolSelectFieldsSchema,
  schoolQuerySchema,
  schoolUpdateSchema,
  schoolsUpdateSchema,
  schoolInsertSchema,
  schoolsInsertSchema,
  schoolResponse,
  schoolsResponse,
} from "./school";
export {
  studentSelectFieldsSchema,
  studentQuerySchema,
  studentUpdateSchema,
  studentsUpdateSchema,
  studentInsertSchema,
  studentsInsertSchema,
  studentResponseSchema,
  studentsResponseSchema,
} from "./student";
export {
  teamSelectFieldsSchema,
  teamResponseItemSchema,
  teamUpdateSchema,
  teamsUpdateSchema,
  teamInsertSchema,
  teamQuerySchema,
  teamsInsertSchema,
  teamResponseSchema,
  teamsResponseSchema,
} from "./team";
export { basicFailed } from "./baseTypes";
export { division, stateEnums, sortEnums } from "./constants";
export type InsertTypes =
  | z.infer<typeof teamInsertSchema>
  | z.infer<typeof coachInsertSchema>
  | z.infer<typeof schoolInsertSchema>
  | z.infer<typeof studentInsertSchema>
  | z.infer<typeof studentsInsertSchema>
  | z.infer<typeof teamsInsertSchema>
  | z.infer<typeof coachesInsertSchema>
  | z.infer<typeof schoolsInsertSchema>;
export type ResponseTypes =
  | z.infer<typeof teamResponseItemSchema>
  | Array<z.infer<typeof teamResponseItemSchema>>
  | z.infer<typeof coachResponseItemSchema>
  | Array<z.infer<typeof coachResponseItemSchema>>
  | z.infer<typeof studentResponseItemSchema>
  | Array<z.infer<typeof studentResponseItemSchema>>
  | z.infer<typeof schoolResponseItemSchema>
  | Array<z.infer<typeof schoolResponseItemSchema>>;
export {
  coachTeamMappings,
  coachTeamMappingsFieldsSchema,
  coachTeamMappingsQuerySchema,
  coachTeamMappingsRespnse,
} from "./coach-team-mappings";

export {
  eventResponseItemSchema,
  eventResponseSchema,
  eventSelectFieldsSchema,
  eventsResponseSchema,
  eventInsertSchema,
  eventsInsertSchema,
  eventUpdateItemSchema,
  eventUpdateSchema,
  eventsUpdateSchema,
} from "./event";

export {
  eventCheckInSelectFieldsSchema,
  eventCheckedInItem,
  eventCheckedInResponseSchema,
  eventCheckedInsResponseSchema,
  eventCheckedInInsert,
  eventCheckedInsInsert,
} from "./event-check-in";

export { fileUploadingFormSchema, fileUploadingResponseSchema } from "./file";

export {
  competitionInsertItem,
  competitionInsertSchema,
  competitionResponseItemSchema,
  competitionsInsertSchema,
  competitionUpdateSchema,
  competitionsUpdateSchema,
  competitionResponse,
  competitionsResponse,
  competitionsFieldsSchema
} from './competition';

export {
  apiQueryParamTestSchema,
  testZodSchema
} from './test';