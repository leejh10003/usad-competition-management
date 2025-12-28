import {
  studentsResponseSchema,
  studentQuerySchema,
  studentsInsertSchema,
  studentsUpdateSchema,
  basicFailed,
  studentSelectFieldsSchema,
} from "usad-scheme";
// --- 🧑‍🎓 학생 (Students) 관련 엔드포인트 ---
import { OpenAPIHono } from "@hono/zod-openapi";
import { id } from "./:id";
import _ from "lodash";
const students = new OpenAPIHono();
students.openapi(
  {
    method: "get",
    path: "",
    summary: "Retrieve a list of students with pagination",
    description: "Fetches a paginated list of students from the database.",
    request: {
      query: studentQuerySchema,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: studentsResponseSchema,
          },
        },
        description: "Retrieve the user",
      },
      500: {
        content: {
          "application/json": {
            schema: basicFailed,
          },
        },
        description: "Describe the reason",
      },
    },
  },
  async (c) => {
    try {
      const condition =
        c.req.valid("query");
      const { skip, take, where } = condition;
      console.log(`Fetching students with offset ${skip} and limit ${take}`);
      const prisma = c.get("prisma");
      const result = await prisma.student.findMany({
        ...condition,
        select: studentSelectFieldsSchema,
      });
      const count = await prisma.student.count({where});
      return c.json({ success: true, students: result, count }, 200);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.stack, "\n", e.message);
      } else {
        console.error("no stack trace \n", e);
      }
      return c.json({ success: false, message: JSON.stringify(e) }, 500);
    }
  }
);

// [생성] 새로운 학생 생성
students.openapi(
  {
    method: "post",
    path: "",
    summary: "Create a new student",
    description: "Creates a new student record in the database.",
    request: {
      body: {
        content: {
          "application/json": {
            schema: studentsInsertSchema,
          },
        },
      },
    },
    responses: {
      200: {
        "application/json": {
          schema: studentsResponseSchema,
        },
        description: "Student created successfully",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { students } = c.req.valid("json");
    const result = (await prisma.student.createManyAndReturn({
      data: students,
      select: studentSelectFieldsSchema,
    })).sort((a, b) => a.mutationIndex - b.mutationIndex);
    return c.json({ success: true, students: result }, 200);
  }
);

students.openapi(
  {
    method: "put",
    description: "Update multiple students",
    summary: "Update multiple students",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: studentsUpdateSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: studentsResponseSchema,
          },
        },
        description: "Update multiple students success",
      },
    },
  },
  async (c) => {
    const { students } = c.req.valid("json");
    const prisma = c.get("prisma");
    const result = await prisma.$transaction(
      async (tx) =>
        await Promise.all(
          students.map(
            async ({ student, id }) =>
              await tx.student.update({
                where: {
                  id: id,
                },
                select: studentSelectFieldsSchema,
                data: student,
              })
          )
        )
    );
    return c.json({ success: true, students: result, count: result.length }, 200);
  }
);

students.route("/:id", id);

export { students };
