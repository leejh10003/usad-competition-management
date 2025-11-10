import { z } from "@hono/zod-openapi";
import {
  coachesInsertSchema,
  coachInsertSchema,
  coachSelectFieldsSchema,
} from "usad-scheme";
import _ from "lodash";
import {
  coachesNestedInsertSchema,
  coachInsertItemSchema,
  coachNestedInsertItem,
  coachResponseItemSchema,
} from "usad-scheme/src/coach";
import { TransactionContextType, TransactionSessionType } from "./index";
function guranteeRelationship(
  coach:
    | z.infer<typeof coachInsertItemSchema>
    | z.infer<typeof coachNestedInsertItem>,
  context: TransactionContextType
) {
  if (
    !_.get(coach as z.infer<typeof coachInsertItemSchema>, "schoolId") &&
    !context.schoolId
  ) {
    throw new Error("Relationship needed for school not provided");
  }
  const schoolId =
    _.get(coach as z.infer<typeof coachInsertItemSchema>, "schoolId") ??
    context.schoolId!;
  return {
    ...coach,
    schoolId,
  };
}
export async function insertCoach(
  coachInput:
    | z.infer<typeof coachInsertSchema>
    | { coach: z.infer<typeof coachNestedInsertItem> },
  tx: TransactionSessionType,
  context: TransactionContextType = {}
): Promise<z.infer<typeof coachResponseItemSchema>> {
  return await tx.coach.create({
    data: guranteeRelationship(coachInput.coach, context),
    select: coachSelectFieldsSchema,
  });
}
export async function insertCoaches(
  coachesInput:
    | z.infer<typeof coachesInsertSchema>
    | z.infer<typeof coachesNestedInsertSchema>,
  tx: TransactionSessionType,
  context: TransactionContextType = {}
): Promise<Array<z.infer<typeof coachResponseItemSchema>>> {
  return await Promise.all(
    coachesInput.coaches.map(
      async (coach) =>
        await tx.coach.create({
          data: guranteeRelationship(coach, context),
          select: coachSelectFieldsSchema,
        })
    )
  );
}
