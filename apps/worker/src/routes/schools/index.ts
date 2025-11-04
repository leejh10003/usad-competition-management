import { OpenAPIHono } from "@hono/zod-openapi";
import {
  schoolListResponseSchema,
  schoolQuerySchema,
  schoolSelectFieldsSchema,
} from "../../schema";

const schools = new OpenAPIHono();

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
            schema: schoolListResponseSchema,
          },
        },
        description: "List of schools",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { externalSchoolId, name, isVirtual, limit, offset } =
      c.req.valid("query");
    const schools = await prisma.school.findMany({
      select: schoolSelectFieldsSchema,
      skip: offset,
      take: limit,
      where: {
        externalSchoolId: externalSchoolId ? {
          equals: externalSchoolId,
        } : undefined,
        name: name ? {
          contains: name,
        } : undefined,
        isVirtual: isVirtual !== undefined ? {
          equals: isVirtual,
        } : undefined,
      },
    });
    return c.json({ success: true, data: schools }, 200);
  }
);
export { schools };
