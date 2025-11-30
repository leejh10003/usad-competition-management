import z from "zod";
import { sortEnums } from "../constants";

const apiQueryParamTestSchema = z.object({
    sort: z.coerce.string().optional().transform((v) => v ? JSON.parse(v) as {[k: string]: z.infer<typeof sortEnums>}[] : undefined)
});
export { apiQueryParamTestSchema };