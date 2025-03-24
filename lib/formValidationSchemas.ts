import { z } from "zod";

export const LoginSchema  = z.object({
  email: z.string().min(5).email().toLowerCase().trim(),
  password: z.string().trim().min(6, { message: 'Password must be at least 6 characters' } ).max(20, { message: 'Password must be not more than 20 characters' })
})

export type LoginType = z.infer<typeof LoginSchema>
