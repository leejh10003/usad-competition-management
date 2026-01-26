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
    const windoeEnd = new Date("2024-12-31T23:59:59Z");
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const coaches = await prisma.coach.findMany({
      select: {
        lastName: true,
        firstName: true,
        id: true,
        externalCoachId: true,
        teamRelationship: {
          where: {
            team: {
              students: {
                some: {
                  eventCheckIns: {
                    none: {
                      event: {
                        startsAt: { gte: windowStart, lte: windoeEnd },
                      },
                    },
                  },
                },
              },
            },
          },
          select: {
            team: {
              select: {
                students: {
                  where: {
                    eventCheckIns: {
                      none: { event: { startsAt: { gte: windowStart, lte: windoeEnd } } },
                    },
                  },
                  select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    externalStudentId: true,
                  },
                },
              },
            },
          },
        },
      },
      where: {
        school: {
          competition: {
            events: {
              some: {
                startsAt: { gte: windowStart, lte: windoeEnd },
              },
            },
          },
        },
        teamRelationship: {
          some: {
            team: {
              students: {
                some: {
                  eventCheckIns: {
                    none: {
                      event: {
                        startsAt: { gte: windowStart, lte: windoeEnd },
                      },
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
