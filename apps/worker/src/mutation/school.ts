import { z } from "@hono/zod-openapi";
import {
  schoolInsertSchema,
  teamResponseItemSchema,
} from "usad-scheme";
import _ from "lodash";
import { coachResponseItemSchema } from "usad-scheme/src/coach";
import { TransactionSessionType, TransactionContextType } from "./index";
import {
  schoolResponseItemSchema,
  schoolsInsertSchema,
} from "usad-scheme/src/school";
import { insertTeams } from "./team";
import { insertCoaches } from "./coach";

export async function insertSchool(
  schoolInput: z.infer<typeof schoolInsertSchema>,
  tx: TransactionSessionType,
  context: TransactionContextType = {}
): Promise<z.infer<typeof schoolResponseItemSchema>> {
  const school = await tx.school.create({
    data: _.omit(schoolInput.school, "primaryCoachId", "coaches", "teams"),
  });
  context.schoolId = school.id;
  const teams = (await insertTeams(
    { teams: schoolInput.school.teams },
    tx,
    context
  )) as Array<z.infer<typeof teamResponseItemSchema>>;
  const coaches = (await insertCoaches(
    { coaches: schoolInput.school.coaches },
    tx
  )) as Array<z.infer<typeof coachResponseItemSchema>>;
  const mappings = schoolInput.school.coachTeamMappings.map(
    ({ coachIndex, teamIndex }) => {
      const coachId = coaches[coachIndex].id;
      const teamId = teams[teamIndex].id;
      return {
        coachId,
        teamId,
      };
    }
  );
  await tx.teamCoachRelationship.createMany({
    data: mappings,
  });
  return school;
}
export async function insertSchools(
  schoolsInput: z.infer<typeof schoolsInsertSchema>,
  tx: TransactionSessionType
): Promise<Array<z.infer<typeof schoolResponseItemSchema>>> {
  return await Promise.all(
    schoolsInput.schools.map(
      async (school) => await insertSchool({ school }, tx)
    )
  );
}
