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
    const { externalSchoolId, name, isVirtual, limit, offset } =
      c.req.valid("query");
    const condition: Exclude<Parameters<typeof prisma['school']['findMany']>[0], undefined>['where'] = {
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
      };
    const schools = (await prisma.school.findMany({
      select: schoolSelectFieldsSchema,
      skip: offset,
      take: limit,
      where: condition,
    })) as z.infer<typeof schoolsResponse>['schools'];
    const count = await prisma.school.count({
      where: condition
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
      async (tx) => await insertSchools({ schools }, tx)
    );
    return c.json({ success: true, schools: result, count: result.length }, 200);
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
    const result = await prisma.$transaction((tx) =>
      Promise.all(
        schools.map(
          async ({ id, school }) =>
            (await tx.school.update({
              data: updateSchoolField(school),
              select: schoolSelectFieldsSchema,
              where: { id },
            })!) as z.infer<typeof schoolsResponse>['schools'][number]
        )
      )
    );
    return c.json({ success: true, schools: result, count: result.length }, 200);
  }
);
export { schools };
