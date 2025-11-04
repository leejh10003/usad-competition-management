import { OpenAPIHono } from "@hono/zod-openapi";
import { schoolResponseSchema, schoolSelectFieldsSchema } from "../../../schema";

const id = new OpenAPIHono();

id.openapi({
    path: '',
    method: 'get',
    summary: 'Retrieve details of a specific school',
    description: 'Fetches detailed information for a specific school by ID.',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: schoolResponseSchema,
          },
        },
        description: 'Details of the specified school',
      }
    }
}, async (c) => {
    const prisma = c.get('prisma');
    const id = c.req.param('id');
    const school = await prisma.school.findUnique({
        where: { id },
        select: schoolSelectFieldsSchema
    });
    return c.json({ success: true, data: school! }, 200);
});

export { id };