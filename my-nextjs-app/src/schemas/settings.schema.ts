import { z } from 'zod';
import { AddDomainSchema } from "@/schemas/settings.schema"; // Define this schema

export const AddDomainSchema = z.object({
  domain: z.string().min(1, { message: "Domain is required" }).url({ message: "Invalid domain URL" }),
  icon: z
    .array(z.instanceof(File))
    .length(1, { message: "Icon is required" })
    .refine(files => files[0].type.startsWith('image/'), { message: "Icon must be an image file" }),
});

export type AddDomainSchemaType = z.infer<typeof AddDomainSchema>;