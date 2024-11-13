"use client"

import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import FormPage from "@/components/formPage"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { BankFormData, bankSchema } from "@/schemas/bankSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { createBanco } from "@/infrastructure/api/repositories/bancoRepository"

interface BancoParams {
  params: { banCodigo: number }
}

export default function BancoId({ params }: BancoParams) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BankFormData>({
    resolver: zodResolver(bankSchema),
    defaultValues: {
      ban_codigo: params.banCodigo ?? 0,
      ban_numero: "",
      ban_descricao: "",
      ban_habilitado_boleto: 0,
      ban_user_insert: "Teste",
      ban_date_insert: new Date().toISOString(),
      ban_user_update: "Teste",
      ban_date_update: new Date().toISOString(),
    },
  })

  const handleNumberInput = (e: any) => {
    if (!/^\d*$/.test(e.target.value)) e.preventDefault()
  }

  const submitData = (data: BankFormData) => {
    try {
      createBanco(data)
    } catch (error) {
      console.error("Error submitting form data:", error)
    }
  }

  return (
    <FormPage>
      <form onSubmit={handleSubmit((data) => submitData(data))}>
        <div className="flex flex-wrap justify-between">
          <div className="w-[49%]">
            <label className="text-sm font-medium text-gray-700">Código:</label>
            <Input
              {...register("ban_codigo")}
              disabled
              className="focus:border-formBorder focus:outline-none focus:ring-0 transition-colors duration-300"
            />
          </div>

          <div className="w-[49%]">
            <label className="text-sm font-medium text-gray-700">
              Número: <span className="text-red-600 font-bold ml-1">*</span>
            </label>
            <Input
              {...register("ban_numero")}
              onInput={handleNumberInput}
              inputMode="numeric"
              className="focus:border-formBorder focus:outline-none focus:ring-0 transition-colors duration-300"
            />
            {errors.ban_numero && <p className="text-red-500 text-xs">{errors.ban_numero.message}</p>}
          </div>

          <div className="w-full">
            <label className="text-sm font-medium text-gray-700">
              Nome: <span className="text-red-600 font-bold ml-1">*</span>
            </label>
            <Input
              {...register("ban_descricao")}
              className="focus:border-formBorder focus:outline-none focus:ring-0 transition-colors duration-300"
            />
            {errors.ban_descricao && <p className="text-red-500 text-xs">{errors.ban_descricao.message}</p>}
          </div>

          <div className="w-full">
            <label className="text-sm font-medium text-gray-700">Site:</label>
            <Input className="focus:border-formBorder focus:outline-none focus:ring-0 transition-colors duration-300" />
          </div>

          <div className="w-full bg-gray-200 p-4 mt-4 rounded-md flex items-center justify-center gap-2">
            <button
              type="submit"
              className="w-full sm:w-2/12 flex text-white bg-save gap-1 hover:bg-save-hover transition-colors duration-300 justify-center items-center p-2 rounded-sm"
            >
              <CheckIcon /> Salvar
            </button>
            <Link
              href="/bancolistarBanco"
              type="submit"
              className="w-full sm:w-2/12 flex text-white bg-cancel gap-1 hover:bg-cancel-hover transition-colors duration-300 justify-center items-center p-2 rounded-sm"
            >
              <CloseIcon /> Cancelar
            </Link>
          </div>
        </div>
      </form>
    </FormPage>
  )
}
