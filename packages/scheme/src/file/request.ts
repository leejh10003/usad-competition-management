import z from "zod";
const fileUploadingFormSchema = z.object({
  file: z.instanceof(File),
  fileKey: z.string(),
  kind: z.enum(["registering-additional", "signature"]),
  index: z.coerce.number(),
});
export { fileUploadingFormSchema };
