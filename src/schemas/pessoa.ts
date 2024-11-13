import { z } from "zod"

export const pessoaSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
})

export type PessoaFormData = z.infer<typeof pessoaSchema>
