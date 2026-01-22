import { OpenAPIHono } from "@hono/zod-openapi";
import { Env } from "../../env";
import {
  fileUploadingFormSchema,
  fileUploadingResponseSchema,
} from "usad-scheme";

const files = new OpenAPIHono<Env>();

files.openapi(
  {
    method: "post",
    path: "",
    request: {
      body: {
        content: {
          "multipart/form-data": {
            schema: fileUploadingFormSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: fileUploadingResponseSchema,
          },
        },
        description: "File uploaded successfully",
      },
    },
  },
  async (c) => {
    const { file, fileKey, kind, index, targetEntityType, targetEntityId } = c.req.valid("form");
    const uploaded = await c.env.USAD_BUCKET.put(
      `/${kind}/${targetEntityType}/${targetEntityId ?? 'undefined'}/${crypto.randomUUID()}/${Date.now()}/${index}/${fileKey.replace(
        /^\//g,
        ""
      )}`,
      file
    );
    return c.json({ success: true as true, fileKey: uploaded!.key }, 200);
  }
);

files.get('*', async (c) => {
  const fileKey = c.req.path.replace(/^\//g, '').replace(/^api\/files/g, '');
  const file = await c.env.USAD_BUCKET.get(fileKey)
  const headers = new Headers();
  headers.set('Content-Type', file!.httpMetadata!.contentType!);
  return c.body(file!.body!, { headers, status: 200});
})

export { files };
