import { z } from "@hono/zod-openapi";
import { division } from "../constants";
import { optionalInfos } from "./baseTypes";

const basicStudentInsert = z.object({
  lastName: z.string(),
  firstName: z.string(),
  division,
});

export const studentInsertItem = basicStudentInsert.and(optionalInfos);
export const studentInsertSchema = z.object({
  student: studentInsertItem,
});
export const studentsInsertSchema = z.object({
  students: z.array(studentInsertItem),
});
export const studentNestedInsertItem = basicStudentInsert.and(optionalInfos);
export const studentsNestedInsertSchema = z.object({
  students: z.array(studentNestedInsertItem),
});
