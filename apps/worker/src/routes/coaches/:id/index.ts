import { OpenAPIHono } from "@hono/zod-openapi";
import { coachResponseSchema, coachSelectFieldsSchema } from "../../../schema";

const id = new OpenAPIHono();

// [상세] 특정 코치 한 명의 상세 정보 조회
id.openapi({
  path: '',
  method: 'get',
  summary: 'Retrieve details of a specific coach',
  description: 'Fetches detailed information for a specific coach by ID.',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: coachResponseSchema,
        },
      },
      description: 'Details of the specified coach',
    }
  }
  }, async (c) => {
    const id = c.req.param('id');
    const prisma = c.get('prisma');
    const result = await prisma.coach.findUnique({
      where: {
        id: id
      },
      select: coachSelectFieldsSchema
    });
    if (!result) {
      throw new Error('Coach not found'); //TODO: 에러 핸들링 개선
    }
    return c.json({ success: true, data: result }, 200);
});
// [수정] 특정 코치 정보 업데이트
id.patch('', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Update coach ${id}` });
});
// [삭제] 특정 코치 정보 삭제
id.delete('', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Delete coach ${id}` });
});
export { id };