import z from "zod";
const fileUploadingFormSchema = z.object({
  file: z.instanceof(File),
  fileKey: z.string(),
  targetEntityType: z.enum(["student", "school", "competition", "coach", "team", "other"]),
  targetEntityId: z.uuid().optional(),
  kind: z.enum(["registering-additional", "signature"]),
  index: z.coerce.number(),
});
export { fileUploadingFormSchema };
