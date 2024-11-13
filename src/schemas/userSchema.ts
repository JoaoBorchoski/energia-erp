import { z } from "zod"

export const loginSchema = z.object({
  usu_nome: z.string().min(1, "Username is required"),
  usu_senha: z.string().min(6, "Password must be at least 6 characters long"),
})
