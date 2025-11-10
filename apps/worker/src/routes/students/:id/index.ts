import { OpenAPIHono } from "@hono/zod-openapi";
import {
  studentResponseSchema,
  studentSelectFieldsSchema,
  studentUpdateSchema,
} from "usad-scheme";
import _ from "lodash";
import { updateStudentField } from "..";
const id = new OpenAPIHono();
id.get("", (c) => {
  return c.json({ message: `Details for student ${id}` });
});
id.openapi(
  {
    path: "",
    method: "get",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: studentResponseSchema,
          },
        },
        description: "Retrieve one student",
      },
    },
    request: {},
  },
  async (c) => {
    const id = c.req.param("id");
    const prisma = c.get("prisma");
    const result = await prisma.student.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
      select: studentSelectFieldsSchema,
    });
    return c.json({ success: true, student: result! }, 200); //TODO: if null?
  }
);
// [수정] 특정 학생 정보 업데이트
id.openapi(
  {
    path: "",
    method: "patch",
    request: {
      body: {
        content: {
          "application/json": {
            schema: studentUpdateSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: studentResponseSchema,
          },
        },
        description: "",
      },
    },
  },
  async (c) => {
    const id = c.req.param("id");
    const { student } = c.req.valid("json");
    const prisma = c.get("prisma");
    const result = await prisma.student.update({
      where: {
        id: id,
      },
      select: studentSelectFieldsSchema,
      data: updateStudentField(student),
    });
    return c.json({ success: true, student: result! }, 200);
  }
);
// [삭제] 특정 학생 정보 삭제
id.delete("", (c) => {
  const id = c.req.param("id");
  return c.json({ message: `Delete student ${id}` });
});
export { id };
