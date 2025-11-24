import { OpenAPIHono, z } from "@hono/zod-openapi";
import { Env } from "../../env";

const files = new OpenAPIHono<Env>();

files.openapi({
    method: 'post',
    path: '',
    request: {
        body: {
            content: {
                'multipart/form-data': {
                    schema: z.object({
                        file: z.instanceof(File),
                        fileKey: z.string(),
                    })
                }
            }
        }
    },
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.object({
                        success: z.literal(true),
                        fileKey: z.string()
                    })
                }
            },
            description: "File uploaded successfully"
        }
    }
}, async (c) => {
  const {file, fileKey} = c.req.valid('form');
  console.log(file, fileKey);
  const uploaded = await c.env.USAD_BUCKET.put(fileKey, file);
  return c.json({ success: true as true, fileKey: uploaded!.key }, 200);
});

export { files };
