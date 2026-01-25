import { OpenAPIHono } from "@hono/zod-openapi";
import { apiQueryParamTestSchema, testZodSchema } from "usad-scheme";
import { basicSuccess } from "usad-scheme/src/baseTypes";

const test = new OpenAPIHono();

test.openapi(
  {
    path: "",
    method: "get",
    request: {
      query: apiQueryParamTestSchema,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: basicSuccess,
          },
        },
        description: "Test API is working",
      },
    },
  },
  async (c) => {
    const { sort } = c.req.valid("query");
    sort?.forEach((value) => {
      for (const [k, v] of Object.entries(value)) {
        console.log("Sort key: ", k, "Sort value:", v);
      }
    });
    return c.json({ success: true }, 200);
  },
);

test.openapi(
  {
    path: "zod",
    method: "get",
    request: {
      query: testZodSchema,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: basicSuccess,
          },
        },
        description: "Test API is working",
      },
    },
  },
  async (c) => {
    const { test } = c.req.valid("query");
    console.log(test);
    return c.json({ success: true }, 200);
  },
);

test.openapi(
  {
    path: "evnet-check-in",
    method: "get",
    responses: {
      200: {
        description: "Get event check-in test",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const windowStart = new Date("2024-01-01T00:00:00Z");
    const currentEvents = await prisma.event.findMany({
      where: {
        startsAt: { gte: windowStart },
      },
      select: {
        competitionId: true,
        id: true,
      },
    });
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const coaches = await prisma.coach.findMany({
      where: {
        school: {
          competitionId: { in: currentEvents.map((e) => e.competitionId) },
        },
        teamRelationship: {
          some: {
            team: {
              students: {
                some: {
                  eventCheckIns: {
                    none: {
                      eventId: { in: currentEvents.map((e) => e.id) },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return c.json({ success: true }, 200);
  },
);

export { test };
