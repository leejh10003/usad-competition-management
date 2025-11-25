import { z } from "@hono/zod-openapi";
import { $Enums } from "@prisma/client";
const divisionEnums: $Enums.Division[] = ["H", "S", "V"];
const division = z.enum(divisionEnums);
const schoolDivisionEnums = z.enum({
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
});
const teamDivisionEnums = z.enum({
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
});
export { division, divisionEnums, schoolDivisionEnums, teamDivisionEnums };