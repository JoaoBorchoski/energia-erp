interface iBanco {
  ban_descricao: string
}

interface iAgencia {
  age_agencia: string
  age_bairro: string
  age_cep: string
  age_codigo: number
  age_complemento: string
  age_date_insert: string // ISO date format
  age_date_update: string | null
  age_email: string | null
  age_fk_ban_codigo: number
  age_gerente: string | null
  age_latitude: string
  age_logradouro: string
  age_longitude: string
  age_municipio: string
  age_numero: string
  age_obs: string
  age_telefone: string
  age_uf: string
  age_user_insert: string
  age_user_update: string | null
  banco: iBanco
}

export type { iAgencia }
