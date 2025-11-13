import {
  studentsResponseSchema,
  studentQuerySchema,
  studentUpdateSchema,
  studentsInsertSchema,
  studentsUpdateSchema,
  basicFailed,
  studentSelectFieldsSchema,
} from "usad-scheme";
// --- 🧑‍🎓 학생 (Students) 관련 엔드포인트 ---
import { OpenAPIHono, z } from "@hono/zod-openapi";
import { id } from "./:id";
import _ from "lodash";
import { insertStudents } from "../../mutation";
const students = new OpenAPIHono();
export function updateStudentField(
  student: z.infer<typeof studentUpdateSchema>["student"]
) {
  return {
    externalStudentId: !_.isUndefined(student.externalStudentId)
      ? student.externalStudentId
      : undefined,
    division: !_.isUndefined(student.division) ? student.division : undefined,
    gpa: !_.isUndefined(student.gpa) ? student.gpa : undefined,
    firstName: !_.isUndefined(student.firstName)
      ? student.firstName
      : undefined,
    lastName: !_.isUndefined(student.lastName) ? student.lastName : undefined,
    teamId: !_.isUndefined(student.teamId) ? student.teamId : undefined,
    schoolId: !_.isUndefined(student.schoolId) ? student.schoolId : undefined,
    usadPin: !_.isUndefined(student.usadPin) ? student.usadPin : undefined,
    signature: !_.isUndefined(student.signature) ? student.signature : undefined,
  };
}
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
      const { offset, limit, firstName, lastName, division } =
        c.req.valid("query");
      console.log(`Fetching students with offset ${offset} and limit ${limit}`);
      const prisma = c.get("prisma");
      const result = await prisma.student.findMany({
        take: limit,
        skip: offset,
        where: {
          firstName: {
            contains: firstName,
          },
          lastName: {
            contains: lastName,
          },
          division: {
            in: division.length > 0 ? division : undefined,
          },
        },
        select: studentSelectFieldsSchema,
      });
      return c.json({ success: true, students: result }, 200);
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
    const result = await prisma.$transaction(
      async (tx) => await insertStudents({ students }, tx, {})
    );
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
                data: updateStudentField(student),
              })
          )
        )
    );
    return c.json({ success: true, students: result }, 200);
  }
);

students.route("/:id", id);

export { students };
