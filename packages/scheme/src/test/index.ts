import z from "zod";
import { sortEnums } from "../constants";
import { CoachWhereInputObjectSchema } from "database/src/generated/schemas/objects/CoachWhereInput.schema"

const apiQueryParamTestSchema = z.object({
    sort: z.coerce.string().optional().transform((v) => v ? JSON.parse(v) as {[k: string]: z.infer<typeof sortEnums>}[] : undefined)
});
const testZodSchema = z.object({
    test: z.coerce.string().optional().transform((arg) => {
        const {data, success} = z.safeDecode(CoachWhereInputObjectSchema, JSON.parse(arg ?? '{}'));
        return success ? data : undefined;
    }).optional()
})
export { apiQueryParamTestSchema, testZodSchema };