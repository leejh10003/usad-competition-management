import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  coachQuerySchema,
  coachSelectFieldsSchema,
  coachUpdateSchema,
  coachesInsertSchema,
  coachesUpdateSchema,
  coachesResponseSchema,
} from "usad-scheme";
import { id } from "./:id";
import { Coach, Prisma } from "@prisma/client";
import { insertCoaches } from "../../mutation";

// --- 🧑‍🏫 코치 (Coaches) 관련 엔드포인트 ---
const coaches = new OpenAPIHono();
export function updateCoach(coach: z.infer<typeof coachUpdateSchema>["coach"]) {
  return {
    externalCoachId:
      coach.externalCoachId !== undefined ? coach.externalCoachId : undefined,
    firstName: coach.firstName !== undefined ? coach.firstName : undefined,
    lastName: coach.lastName !== undefined ? coach.lastName : undefined,
    email: coach.email !== undefined ? coach.email : undefined,
    phone: coach.phone !== undefined ? coach.phone : undefined,
    schoolId: coach.schoolId !== undefined ? coach.schoolId : undefined,
    signature: coach.signature !== undefined ? coach.signature : undefined,
  };
}
// [목록] 모든 코치 리스트 조회
coaches.openapi(
  {
    path: "",
    method: "get",
    summary: "Retrieve a list of all coaches",
    description: "Fetches a list of all coaches from the database.",
    request: {
      query: coachQuerySchema,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: coachesResponseSchema,
          },
        },
        description: "List of all coaches",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { skip, take, where, orderBy } =
      c.req.valid("query");
    const result = await prisma.coach.findMany({
      select: coachSelectFieldsSchema,
      where,
      take,
      skip,
      orderBy,
    });
    const count = await prisma.coach.count({
      where
    })
    return c.json({ success: true, coaches: result, count }, 200);
  }
);
coaches.openapi(
  {
    method: "put",
    path: "",
    responses: {
      200: {
        description: "Update multiple coaches",
        content: {
          "application/json": {
            schema: coachesResponseSchema,
          },
        },
      },
    },
    request: {
      body: {
        content: {
          "application/json": {
            schema: coachesUpdateSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const { coaches } = c.req.valid("json");
    const prisma = c.get("prisma");
    const valueRows = coaches.map((e, i) => Prisma.sql`(
      ${e.id}::UUID,
      ${e.coach.externalCoachId}::TEXT,
      ${e.coach.firstName}::TEXT,
      ${e.coach.lastName}::TEXT,
      ${e.coach.email}::TEXT,
      ${e.coach.phone}::TEXT,
      ${e.coach.signature}::TEXT,
      ${i}::INTEGER,
      ${e.coach.schoolId}::UUID,
      ${e.coach.externalCoachId !== undefined}::BOOLEAN,
      ${e.coach.firstName !== undefined}::BOOLEAN,
      ${e.coach.lastName !== undefined}::BOOLEAN,
      ${e.coach.email !== undefined}::BOOLEAN,
      ${e.coach.phone !== undefined}::BOOLEAN,
      ${e.coach.signature !== undefined}::BOOLEAN,
      ${e.coach.schoolId !== undefined}::BOOLEAN
    )`);
    const result = await prisma.$queryRaw<Coach[]>`
    UPDATE "coaches" as c
    SET
      "external_coach_id" = CASE WHEN v."update_external_coach_id" THEN v."external_coach_id" ELSE c."external_coach_id" END,
      "first_name" = CASE WHEN v."update_first_name" THEN v."first_name" ELSE c."first_name" END,
      "last_name" = CASE WHEN v."update_last_name" THEN v."last_name" ELSE c."last_name" END,
      "email" = CASE WHEN v."update_email" THEN v."email" ELSE c."email" END,
      "phone" = CASE WHEN v."update_phone" THEN v."phone" ELSE c."phone" END,
      "signature" = CASE WHEN v."update_signature" THEN v."signature" ELSE c."signature" END,
      "school_id" = CASE WHEN v."update_school_id" THEN v."school_id" ELSE c."school_id" END
      FROM (VALUES ${Prisma.join(valueRows, ',')}) AS v(
        id,
        "external_coach_id",
        "first_name",
        "last_name",
        "email",
        "phone",
        "signature",
        "mutation_index",
        "school_id",
        "update_external_coach_id",
        "update_first_name",
        "update_last_name",
        "update_email",
        "update_phone",
        "update_signature",
        "update_school_id"
      )
      WHERE c.id = v.id
      RETURNING 
        c.id,
        c.external_coach_id AS "externalCoachId",
        c.first_name AS "firstName",
        c.last_name AS "lastName",
        c.email,
        c.phone,
        c.signature,
        c.school_id AS "schoolId"
      ;
    `;
    return c.json({ success: true, coaches: result, count: result.length }, 200);
  }
);
coaches.openapi(
  {
    method: "post",
    path: "",
    responses: {
      200: {
        description: "Insert multiple coaches",
        content: {
          "application/json": {
            schema: coachesResponseSchema,
          },
        },
      },
    },
    request: {
      body: {
        content: {
          "application/json": {
            schema: coachesInsertSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const { coaches } = c.req.valid("json");
    const prisma = c.get("prisma");
    const result = await prisma.$transaction((tx) => insertCoaches(tx, coaches));
    return c.json({ success: true, coaches: result, count: result.length }, 200);
  }
);
coaches.route("/:id", id);

export { coaches };
