import { OpenAPIHono } from '@hono/zod-openapi';
import { coachListResponseSchema, coachQuerySchema, coachSelectFieldsSchema } from '../../schema';
import { id } from './:id';

// --- 🧑‍🏫 코치 (Coaches) 관련 엔드포인트 ---
const coaches = new OpenAPIHono();
// [목록] 모든 코치 리스트 조회
coaches.openapi({
  path: '',
  method: 'get',
  summary: 'Retrieve a list of all coaches',
  description: 'Fetches a list of all coaches from the database.',
  request: {
    query: coachQuerySchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: coachListResponseSchema,
        },
      },
      description: 'List of all coaches',
    }
  }
}, async (c) => {
  const prisma = c.get('prisma');
  const { externalCoachId, lastName, firstName, schoolId, limit, offset } = c.req.valid('query');
  const result = await prisma.coach.findMany({
    select: coachSelectFieldsSchema,
    where: {
      externalCoachId: externalCoachId ? {
        contains: externalCoachId
      }: undefined,
      lastName: lastName ? {
        contains: lastName
      }: undefined,
      firstName: firstName ? {
        contains: firstName
      }: undefined,
      schoolId: schoolId ? {
        equals: schoolId
      }: undefined
    },
    take: limit,
    skip: offset,
  });
  return c.json({ success: true, data: result }, 200);
});
coaches.post('/', (c) => {
  return c.json({ message: 'Create a new coach' }, 201);
});
coaches.route('/:id', id);

export { coaches };