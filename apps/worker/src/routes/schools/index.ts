import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  schoolListInsertSchema,
  schoolListResponseSchema,
  schoolListUpdateSchema,
  schoolQuerySchema,
  schoolSelectFieldsSchema,
  schoolWriteSchema,
} from "../../schema";

const schools = new OpenAPIHono();

export function updateSchoolField(school: z.infer<typeof schoolWriteSchema>){
  return {
    externalSchoolId: school.externalSchoolId !== undefined ? school.externalSchoolId : undefined,
    name: school.name,
    isVirtual: school.isVirtual !== undefined ? school.isVirtual : undefined,
    streetAddress: school.streetAddress !== undefined ? school.streetAddress : undefined,
    city: school.city !== undefined ? school.city : undefined,
    state: school.state !== undefined ? school.state : undefined,
    zipCode: school.zipCode !== undefined ? school.zipCode : undefined,
    phone: school.phone !== undefined ? school.phone : undefined,
    principalName: school.principalName !== undefined ? school.principalName : undefined,
    principalEmail: school.principalEmail !== undefined ? school.principalEmail : undefined,
    primaryCoachId: school.primaryCoachId !== undefined ? school.primaryCoachId : undefined,
    emailDomain: school.emailDomain !== undefined ? school.emailDomain : undefined,
  }
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
        externalSchoolId: externalSchoolId
          ? {
              equals: externalSchoolId,
            }
          : undefined,
        name: name
          ? {
              contains: name,
            }
          : undefined,
        isVirtual:
          isVirtual !== undefined
            ? {
                equals: isVirtual,
              }
            : undefined,
      },
    });
    return c.json({ success: true, data: schools }, 200);
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
            schema: schoolListResponseSchema,
          },
        },
        description: "List of schools",
      },
    },
    request: {
      body: {
        content: {
          "application/json": {
            schema: schoolListInsertSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { schools } = c.req.valid("json");
    const result = await prisma.school.createManyAndReturn({
      select: schoolSelectFieldsSchema,
      data: schools,
    });
    return c.json({ success: true, data: result }, 200);
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
            schema: schoolListResponseSchema,
          },
        },
        description: "List of schools",
      },
    },
    request: {
      body: {
        content: {
          "application/json": {
            schema: schoolListUpdateSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const { schools } = c.req.valid("json");
    const prisma = c.get("prisma");
    const result = await prisma.$transaction((tx) =>
      Promise.all(
        schools.map(
          async (school) =>
            await tx.school.create({
              data: updateSchoolField(school),
              select: schoolSelectFieldsSchema,
            })
        )
      )
    );
    return c.json({ success: true, data: result }, 200);
  }
);
export { schools };
