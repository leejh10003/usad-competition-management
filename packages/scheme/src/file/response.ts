import z from "zod";

const fileUploadingResponseSchema = z.object({
  success: z.literal(true),
  fileKey: z.string(),
});

export { fileUploadingResponseSchema };
