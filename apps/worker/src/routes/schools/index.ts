import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  schoolsInsertSchema,
  schoolsResponse,
  schoolsUpdateSchema,
  schoolQuerySchema,
  schoolSelectFieldsSchema,
  schoolUpdateSchema,
} from "usad-scheme";
import { insertSchools } from "../../mutation";
import { Prisma, School } from "@prisma/client";

const schools = new OpenAPIHono();

export function updateSchoolField(
  school: z.infer<typeof schoolUpdateSchema>["school"]
) {
  return {
    externalSchoolId:
      school.externalSchoolId !== undefined
        ? school.externalSchoolId
        : undefined,
    name: school.name,
    isVirtual: school.isVirtual !== undefined ? school.isVirtual : undefined,
    streetAddress:
      school.streetAddress !== undefined ? school.streetAddress : undefined,
    city: school.city !== undefined ? school.city : undefined,
    state: school.state !== undefined ? school.state : undefined,
    zipCode: school.zipCode !== undefined ? school.zipCode : undefined,
    phone: school.phone !== undefined ? school.phone : undefined,
    principalName:
      school.principalName !== undefined ? school.principalName : undefined,
    principalEmail:
      school.principalEmail !== undefined ? school.principalEmail : undefined,
    primaryCoachId:
      school.primaryCoachId !== undefined ? school.primaryCoachId : undefined,
    emailDomain:
      school.emailDomain !== undefined ? school.emailDomain : undefined,
  };
}

schools.openapi(
  {
    path: "",
    method: "get",
    summary: "Retrieve Schools",
    description: "Retrieve a list of schools.",
    tags: ["Schools"],
    request: {
      query: schoolQuerySchema,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: schoolsResponse,
          },
        },
        description: "List of schools",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { where, take, skip, orderBy } =
      c.req.valid("query");
    const schools = (await prisma.school.findMany({
      select: schoolSelectFieldsSchema,
      skip,
      take,
      where,
      orderBy,
    })) as z.infer<typeof schoolsResponse>['schools'];
    const count = await prisma.school.count({
      where
    })
    return c.json({ success: true, schools, count }, 200);
  }
);
schools.openapi(
  {
    method: "post",
    path: "",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: schoolsResponse,
          },
        },
        description: "List of schools",
      },
    },
    request: {
      body: {
        content: {
          "application/json": {
            schema: schoolsInsertSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { schools } = c.req.valid("json");
    const result = await prisma.$transaction(
      async (tx) => {
        return insertSchools(tx, schools);
      }
    );
    return c.json({ success: true, schools: result, count: result.length } as z.infer<typeof schoolsResponse>, 200);
  }
);
schools.openapi(
  {
    method: "put",
    path: "",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: schoolsResponse,
          },
        },
        description: "List of schools",
      },
    },
    request: {
      body: {
        content: {
          "application/json": {
            schema: schoolsUpdateSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const { schools } = c.req.valid("json");
    const prisma = c.get("prisma");
    const queryVariables = schools.map((s, i) => Prisma.sql`(
    ${s.id}::UUID,
    ${s.school.externalSchoolId}::TEXT,
    ${s.school.name}::TEXT,
    ${s.school.isVirtual}::BOOLEAN,
    ${s.school.streetAddress}::TEXT,
    ${s.school.city}::TEXT,
    ${s.school.state}::"State",
    ${s.school.zipCode}::TEXT,
    ${s.school.phone}::TEXT,
    ${s.school.principalName}::TEXT,
    ${s.school.principalEmail}::TEXT,
    ${s.school.objectiveScore}::FLOAT8,
    ${s.school.subjectiveScore}::FLOAT8,
    ${s.school.primaryCoachId}::UUID,
    ${s.school.emailDomain}::TEXT,
    ${s.school.division}::INTEGER,
    ${i}::INTEGER
    )`)
    const result = await prisma.$queryRaw<School[]>`
    UPDATE "schools" as s
    SET
      "external_school_id" = COALESCE(v.external_school_id, s.external_school_id),
      "name" = COALESCE(v.name, s.name),
      "is_virtual" = COALESCE(v.is_virtual, s.is_virtual),
      "street_address" = COALESCE(v.street_address, s.street_address),
      "city" = COALESCE(v.city, s.city),
      "state" = COALESCE(v.state, s.state),
      "zip_code" = COALESCE(v.zip_code, s.zip_code),
      "phone" = COALESCE(v.phone, s.phone),
      "principal_name" = COALESCE(v.principal_name, s.principal_name),
      "principal_email" = COALESCE(v.principal_email, s.principal_email),
      "objective_score" = COALESCE(v.objective_score, s.objective_score),
      "subjective_score" = COALESCE(v.subjective_score, s.subjective_score),
      "primary_coach_id" = COALESCE(v.primary_coach_id, s.primary_coach_id),
      "email_domain" = COALESCE(v.email_domain, s.email_domain),
      "division" = COALESCE(v.division, s.division),
      "mutation_index" = v.mutation_index
    FROM (VALUES ${Prisma.join(queryVariables)}) as v(
      "id",
      "external_school_id",
      "name",
      "is_virtual",
      "street_address",
      "city",
      "state",
      "zip_code",
      "phone",
      "principal_name",
      "principal_email",
      "objective_score",
      "subjective_score",
      "primary_coach_id",
      "email_domain",
      "division",
      "mutation_index"
    )
    WHERE s.id = v.id
    RETURNING
    "id",
    "external_school_id" AS "externalSchoolId",
    "name",
    "is_virtual" AS "isVirtual",
    "street_address" AS "streetAddress",
    "city",
    "state",
    "zip_code" AS "zipCode",
    "phone",
    "principal_name" AS "principalName",
    "principal_email" AS "principalEmail",
    "objective_score" AS "objectiveScore",
    "subjective_score" AS "subjectiveScore",
    "primary_coach_id" AS "primaryCoachId",
    "email_domain" AS "emailDomain",
    "division",
    "mutation_index" AS "mutationIndex"
    `;
    return c.json({ success: true, schools: result as z.infer<typeof schoolsResponse>['schools'], count: result.length }, 200);
  }
);
export { schools };
