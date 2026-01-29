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
    ${i}::INTEGER,
    ${s.school.externalSchoolId !== undefined}::BOOLEAN,
    ${s.school.name !== undefined}::BOOLEAN,
    ${s.school.isVirtual !== undefined}::BOOLEAN,
    ${s.school.streetAddress !== undefined}::BOOLEAN,
    ${s.school.city !== undefined}::BOOLEAN,
    ${s.school.state !== undefined}::BOOLEAN,
    ${s.school.zipCode !== undefined}::BOOLEAN,
    ${s.school.phone !== undefined}::BOOLEAN,
    ${s.school.principalName !== undefined}::BOOLEAN,
    ${s.school.principalEmail !== undefined}::BOOLEAN,
    ${s.school.objectiveScore !== undefined}::BOOLEAN,
    ${s.school.subjectiveScore !== undefined}::BOOLEAN,
    ${s.school.primaryCoachId !== undefined}::BOOLEAN,
    ${s.school.emailDomain !== undefined}::BOOLEAN,
    ${s.school.division !== undefined}::BOOLEAN
    )`);
    try {
      const result = await prisma.$queryRaw<School[]>`
      UPDATE "schools" as s
      SET
        "external_school_id" = CASE WHEN v."update_external_school_id" THEN v."external_school_id" ELSE s."external_school_id" END,
        "name" = CASE WHEN v."update_name" THEN v."name" ELSE s."name" END,
        "is_virtual" = CASE WHEN v."update_is_virtual" THEN v."is_virtual" ELSE s."is_virtual" END,
        "street_address" = CASE WHEN v."update_street_address" THEN v."street_address" ELSE s."street_address" END,
        "city" = CASE WHEN v."update_city" THEN v."city" ELSE s."city" END,
        "state" = CASE WHEN v."update_state" THEN v."state" ELSE s."state" END,
        "zip_code" = CASE WHEN v."update_zip_code" THEN v."zip_code" ELSE s."zip_code" END,
        "phone" = CASE WHEN v."update_phone" THEN v."phone" ELSE s."phone" END,
        "principal_name" = CASE WHEN v."update_principal_name" THEN v."principal_name" ELSE s."principal_name" END,
        "principal_email" = CASE WHEN v."update_principal_email" THEN v."principal_email" ELSE s."principal_email" END,
        "objective_score" = CASE WHEN v."update_objective_score" THEN v."objective_score" ELSE s."objective_score" END,
        "subjective_score" = CASE WHEN v."update_subjective_score" THEN v."subjective_score" ELSE s."subjective_score" END,
        "primary_coach_id" = CASE WHEN v."update_primary_coach_id" THEN v."primary_coach_id" ELSE s."primary_coach_id" END,
        "email_domain" = CASE WHEN v."update_email_domain" THEN v."email_domain" ELSE s."email_domain" END,
        "division" = CASE WHEN v."update_division" THEN v."division" ELSE s."division" END,
        "mutation_index" = v."mutation_index"
      FROM (VALUES ${Prisma.join(queryVariables, ',')}) as v(
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
        "mutation_index",
        "update_external_school_id",
        "update_name",
        "update_is_virtual",
        "update_street_address",
        "update_city",
        "update_state",
        "update_zip_code",
        "update_phone",
        "update_principal_name",
        "update_principal_email",
        "update_objective_score",
        "update_subjective_score",
        "update_primary_coach_id",
        "update_email_domain",
        "update_division"
      )
      WHERE s.id = v.id
      RETURNING
      s."id",
      s."external_school_id" AS "externalSchoolId",
      s."name",
      s."is_virtual" AS "isVirtual",
      s."street_address" AS "streetAddress",
      s."city",
      s."state",
      s."zip_code" AS "zipCode",
      s."phone",
      s."principal_name" AS "principalName",
      s."principal_email" AS "principalEmail",
      s."objective_score" AS "objectiveScore",
      s."subjective_score" AS "subjectiveScore",
      s."primary_coach_id" AS "primaryCoachId",
      s."email_domain" AS "emailDomain",
      s."division",
      s."mutation_index" AS "mutationIndex"
      `;
      return c.json({ success: true, schools: result as z.infer<typeof schoolsResponse>['schools'], count: result.length }, 200);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);
export { schools };
