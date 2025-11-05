import { OpenAPIHono } from "@hono/zod-openapi";
import {
  schoolResponseSchema,
  schoolSelectFieldsSchema,
  schoolUpdateRequestSchema,
} from "../../../schema";
import { updateSchoolField } from "..";

const id = new OpenAPIHono();

id.openapi(
  {
    path: "",
    method: "get",
    summary: "Retrieve details of a specific school",
    description: "Fetches detailed information for a specific school by ID.",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: schoolResponseSchema,
          },
        },
        description: "Details of the specified school",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const id = c.req.param("id");
    const school = await prisma.school.findUnique({
      where: { id },
      select: schoolSelectFieldsSchema,
    });
    return c.json({ success: true, data: school! }, 200);
  }
);

id.openapi(
  {
    method: "patch",
    path: "",
    summary: "Update single student",
    description: "Update single student with path parameter id",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: schoolResponseSchema,
          },
        },
        description: "Details of the specified school",
      },
    },
    request: {
      body: {
        content: {
          "application/json": {
            schema: schoolUpdateRequestSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const id = c.req.param('id');
    const prisma = c.get('prisma');
    const { school } = c.req.valid('json');
    const result = await prisma.school.update({
      where: { id },
      select: schoolSelectFieldsSchema,
      data: updateSchoolField(school)
    });
    return c.json({success: true, data: result!}, 200);
  }
);
id;

export { id };
