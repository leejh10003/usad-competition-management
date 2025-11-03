import { OpenAPIHono } from "@hono/zod-openapi";
const id = new OpenAPIHono();
id.get('', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Details for student ${id}` });
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