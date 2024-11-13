import { BancoDTO } from "@/infrastructure/dto/bancoDTO"
import { api } from "@/infrastructure/api/axios"
import { BankFormData } from "@/schemas/bankSchema"

// interface bancoData {
//     ban_codigo: number
//     ban_numero: string
//     ban_descricao: string
//     ban_habilitado_boleto: number
//     ban_user_insert: string
//     ban_date_insert: Date
//     ban_user_update: string
//     ban_date_update: Date
// }

export async function getListBanco(): Promise<BancoDTO[]> {
    try {
        const req = await api.get(`/finan-banco`)

        const data = req.data.data?.map((item: any) => {
            return {
                id: "",
                codigo: item.ban_codigo,
                numero: item.ban_numero,
                nome: item.ban_descricao,
                opcoes: "",
            }
        }) as BancoDTO[]

        return data
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error("", { cause: error })
        }
        throw new Error("", error as ErrorOptions)
    }
}

export async function createBanco(dataBanco: BankFormData): Promise<void> {
    try {
        await api.post(`/finan-banco`, dataBanco)
    } catch (error: unknown) {
        console.log(error)
        if (error instanceof Error) {
            throw new Error("", { cause: error })
        }
        throw new Error("", error as ErrorOptions)
    }
}