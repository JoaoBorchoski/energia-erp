import { z } from "zod"

export const agencySchema = z.object({
  age_codigo: z.number().min(0, "Agency code must be a non-negative integer"),
  age_agencia: z.string().min(1, "Agency name is required"),
  //   age_descricao: z.string().min(1, "Agency name is required"),
  //   age_user_insert: z.string().min(1, "User insert is required"),
  //   age_date_insert: z.string().datetime(),
  //   age_user_update: z.string().min(1, "User update is required"),
  //   age_date_update: z.string().datetime(),
  age_fk_ban_codigo: z.number().min(0, "Bank code must be a non-negative integer"),
  age_cep: z.string(),
  age_bairro: z.string(),
  age_logradouro: z.string(),
  age_municipio: z.string(),
  age_uf: z.string(),
  age_complemento: z.string(),
  age_numero: z.string(),
  age_obs: z.string(),
  banco_nome: z.string(),
})

export type AgencyFormData = z.infer<typeof agencySchema>
