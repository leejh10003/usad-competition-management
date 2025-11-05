import { OpenAPIHono } from "@hono/zod-openapi";
import { coachResponseSchema, coachSelectFieldsSchema, coachUpdateByIdSchema } from "../../../schema";
import { updateCoach } from "..";

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
id.openapi({
  method: 'patch',
  path: '',
  responses: {
    200: {
      description: "Update single coach",
      content: {
        "application/json": {
          schema: coachResponseSchema
        }
      }
    }
  },
  request: {
    body: {
      content: {
        "application/json": {
          schema: coachUpdateByIdSchema
        }
      }
    }
  }
}, async (c) => {
  const { coach } = c.req.valid('json');
  const prisma = c.get('prisma');
  const result = await prisma.coach.update({
    data: updateCoach(coach),
    where: {
      id: coach.id
    },
    select: coachSelectFieldsSchema
  });
  return c.json({success: true, data: result}, 200);
});
export { id };