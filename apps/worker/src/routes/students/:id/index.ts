import { OpenAPIHono } from "@hono/zod-openapi";
import { studentResponseSchema, studentSelectSchema } from "../../../schema";
const id = new OpenAPIHono();
id.get('', (c) => {
  
  return c.json({ message: `Details for student ${id}` });
});
id.openapi({
  path: "",
  method: "get",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: studentResponseSchema
        }
      },
      description: "Retrieve one student"
    }
  },
  request: {}
}, async (c) => {
  const id = c.req.param('id');
  const prisma = c.get('prisma');
  const result = await prisma.student.findFirst({
    where: {
      id: {
        equals: id,
      }
    },
    select: studentSelectSchema
  });
  return c.json({success: true, student: result!}, 200); //TODO: if null?
});
// [수정] 특정 학생 정보 업데이트
id.patch('', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Update student ${id}` });
});
// [삭제] 특정 학생 정보 삭제
id.delete('', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Delete student ${id}` });
});
export { id };