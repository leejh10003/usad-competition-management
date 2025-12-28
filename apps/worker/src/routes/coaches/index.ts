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
    const result = await prisma.$transaction((tx) =>
      Promise.all(
        coaches.map(
          async ({ coach, id }) =>
            await tx.coach.update({
              data: updateCoach(coach),
              where: {
                id: id,
              },
              select: coachSelectFieldsSchema,
            })
        )
      )
    );
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
    const result = (await prisma.coach.createManyAndReturn({
      data: coaches,
      select: coachSelectFieldsSchema,
    })).sort((a, b) => a.mutationIndex - b.mutationIndex);
    return c.json({ success: true, coaches: result, count: result.length }, 200);
  }
);
coaches.route("/:id", id);

export { coaches };
