import { OpenAPIHono } from "@hono/zod-openapi";
import { apiQueryParamTestSchema } from "usad-scheme";
import { basicSuccess } from "usad-scheme/src/baseTypes";

const test = new OpenAPIHono();

test.openapi({
    path: '',
    method: 'get',
    request: {
        query: apiQueryParamTestSchema
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: basicSuccess
                }
            },
            description: 'Test API is working',
        }
    },
}, async (c) => {
    const { sort } = c.req.valid('query');
    console.log(sort);
    return c.json({ success: true }, 200);
});

export { test }