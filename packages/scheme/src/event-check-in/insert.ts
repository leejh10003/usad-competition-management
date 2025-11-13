import z from "zod";
import { eventCheckedInItem } from "./baseTypes";

export const eventCheckedInsInsert = z.object({
    events: z.array(eventCheckedInItem)
});
export const eventCheckedInInsert = z.object({
    event: eventCheckedInItem
})