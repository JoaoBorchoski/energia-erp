"use client"

import AppInput from "@/components/appInput"
import AppModal from "@/components/appModal"
import FormPage from "@/components/formPage"
import SaveCancelButtons from "@/components/SaveCancelButtons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthContext } from "@/context/AuthContext"
import { toast } from "@/hooks/use-toast"
import { createAgencia, getAgencia, updateAgencia } from "@/infrastructure/api/repositories/agenciaRepository"
import { AgencyFormData, agencySchema } from "@/schemas/agenciaSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select } from "@mui/material"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

type iAgenciaParams = {
  params: { agenciaId: string }
}

export default function Agencia({ params }: iAgenciaParams) {
  const { setLoading } = useContext(AuthContext)
  const [result, setResult] = useState(null)
  const [error, setError] = useState<string | null>(null)
  const [agenciaId, setAgenciaId] = useState<number | null>(null)
  const [openModal, setOpenModal] = useState(false)

  const router = useRouter()

  useEffect(() => {
    getData()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AgencyFormData>({
    resolver: zodResolver(agencySchema),
    defaultValues: {
      age_codigo: 0,
      age_numero: "",
      age_fk_ban_codigo: 0,
      age_cep: "",
      age_bairro: "",
      age_logradouro: "",
      age_municipio: "",
      age_uf: "",
      age_complemento: "",
      age_obs: "",
      age_agencia: "",
      banco_nome: "",
    },
  })

  const getData = async () => {
    setLoading(true)
    if (params.agenciaId != "new") {
      setAgenciaId(Number(params.agenciaId))
      await getAgencia(Number(params.agenciaId), setLoading)
        .then((response) => {
          console.log(response)
          setResult(response)
          reset(response)
        })
        .catch((error) => {
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  const onSubmit = async (data: AgencyFormData) => {
    if (agenciaId) {
      try {
        const resultData = await updateAgencia(data, setLoading)
        toast({
          title: "Agência atualizada com sucesso",
          color: "success",
        })
        router.push("/agencialistarAgencia")
      } catch (error) {
        toast({
          title: "Erro ao atualizar agência",
          variant: "destructive",
        })
      }
    } else {
      try {
        const resultData = await createAgencia(data, setLoading)
        toast({
          title: "Agência criada com sucesso",
          color: "success",
        })
        router.push("/agencialistarAgencia")
      } catch (error) {
        toast({
          title: "Erro ao criar agência",
          variant: "destructive",
        })
      }
    }
  }

  const buscaBanco = async () => {
    setOpenModal(true)
    console.log("Busca banco")
  }

  const Form = () => {
    return (
      <FormPage>
        <form>
          <div className="grid grid-cols-12 gap-x-4">
            <AppInput label="Código:" name="age_codigo" register={register} errors={errors} className="col-span-2" disabled />
            <AppInput label="Agência:" name="age_agencia" register={register} errors={errors} className="col-span-3" required />
            {/* <AppInput
            label="Banco:"
            name="age_fk_ban_codigo"
            register={register}
            errors={errors}
            className="col-span-2"
            required
            type="number"
          /> */}

            <div className="col-span-2 flex">
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700">
                  Banco: <span className="text-red-600 font-bold ml-1">*</span>
                </label>
                <Input
                  {...register("age_fk_ban_codigo")}
                  className=" rounded-r-none focus:border-formBorder focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300 w-full"
                />
                {errors?.age_fk_ban_codigo && <p className="text-red-500 text-xs">{errors.age_fk_ban_codigo.message}</p>}
              </div>
              <div className="flex items-end">
                <Button type="button" onClick={buscaBanco} variant="secondary" className="rounded-l-none rounded-r-md item">
                  <SearchIcon />
                </Button>
              </div>
            </div>

            <AppInput label="Nome Banco" name="banco_nome" register={register} errors={errors} className="col-span-5" />
            <AppInput label="CEP:" name="age_cep" register={register} errors={errors} className="col-span-2" />
            <AppInput label="Bairro:" name="age_bairro" register={register} errors={errors} className="col-span-4" />
            <AppInput label="Logradouro:" name="age_logradouro" register={register} errors={errors} className="col-span-6" />
            <AppInput label="Número:" name="age_numero" register={register} errors={errors} className="col-span-3" />
            <AppInput label="Complemento:" name="age_complemento" register={register} errors={errors} className="col-span-3" />
            <AppInput label="Município:" name="age_municipio" register={register} errors={errors} className="col-span-4" />
            <AppInput label="UF:" name="age_uf" register={register} errors={errors} className="col-span-2" />
            <AppInput label="Observações:" name="age_obs" register={register} errors={errors} className="col-span-12" />
          </div>
        </form>
        <SaveCancelButtons saveFuncion={handleSubmit(onSubmit)} cancelFunction={() => router.push("/agencialistarAgencia")} />
      </FormPage>
    )
  }

  return (
    <>
      <Form />

      <AppModal open={openModal} setClose={setOpenModal} width={"80%"}>
        <FormPage>
          <Select></Select>
        </FormPage>
      </AppModal>
    </>
  )
}
