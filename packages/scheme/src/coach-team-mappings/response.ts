import { z } from "@hono/zod-openapi";
import { basicSuccess } from "../baseTypes";
import { coachTeamMappings } from "./baseTypes";

export const coachTeamMappingsRespnse = basicSuccess.extend({
    coachTeamMappings: z.array(coachTeamMappings),
    count: z.int()
})