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
    const { file, fileKey, kind, index } = c.req.valid("form");
    const uploaded = await c.env.USAD_BUCKET.put(
      `/${kind}/${crypto.randomUUID()}/${Date.now()}/${index}/${fileKey.replace(
        /^\//g,
        ""
      )}`,
      file
    );
    return c.json({ success: true as true, fileKey: uploaded!.key }, 200);
  }
);

export { files };
