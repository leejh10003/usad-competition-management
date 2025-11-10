import { z } from "@hono/zod-openapi";
import {
  teamInsertSchema,
  teamResponseItemSchema,
  teamSelectFieldsSchema,
  teamsInsertSchema,
} from "../schema";
import _ from "lodash";
import { TransactionSessionType, TransactionContextType } from "./index";
import { insertStudents } from "./student";
import { teamInsertItem, teamNestedInsertItem, teamsNestedInsertSchema } from "../schema/team";

function guranteeRelationship(team: z.infer<typeof teamInsertItem> | z.infer<typeof teamNestedInsertItem>, context: TransactionContextType){
  if (!_.get(team as z.infer<typeof teamInsertItem>, 'schoolId') && !context.schoolId) {
    throw new Error("Relationships needed for team is not provided");
  }
  const schoolId = (team as z.infer<typeof teamInsertItem>).schoolId ?? context.schoolId!;
  return {
    ..._.omit(team, "students"),
    schoolId
  }
}

export async function insertTeam(
  teamInput: z.infer<typeof teamInsertSchema> | { team: z.infer<typeof teamNestedInsertItem>},
  tx: TransactionSessionType,
  context: TransactionContextType
): Promise<z.infer<typeof teamResponseItemSchema>> {
  const team = await tx.team.create({
    data: guranteeRelationship(teamInput.team, context),
    select: teamSelectFieldsSchema,
  });
  const teamId = team.id;
  if (!context.schoolId) {
    context.schoolId = team.schoolId;
  }
  const newContext = _.cloneDeep(context);
  newContext.teamId = teamId;
  if (teamInput.team.students) {
    await insertStudents({ students: teamInput.team.students }, tx, newContext);
  }
  return team;
}

export async function insertTeams(
  teamsInput: z.infer<typeof teamsInsertSchema> | z.infer<typeof teamsNestedInsertSchema>,
  tx: TransactionSessionType,
  context: TransactionContextType
): Promise<Array<z.infer<typeof teamResponseItemSchema>>> {
  return await Promise.all(
    teamsInput.teams.map(
      async (team) => await insertTeam({ team }, tx, context)
    )
  );
}
