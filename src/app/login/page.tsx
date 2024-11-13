"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/schemas/userSchema"
import { z } from "zod"
import { api } from "@/infrastructure/api/axios"
import { useContext, useState } from "react"
import { Loader2 } from "lucide-react"
import { AuthContext } from "@/context/AuthContext"

type LoginFormData = z.infer<typeof loginSchema>

export default function Login() {
  const { login, loading } = useContext(AuthContext)

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <div className="min-w-full flex flex-col md:flex-row gap-8 md:gap-16">
      <img src="/images/background-login.png" className="w-6/12 h-auto max-w-full hidden md:block" alt="Logo" />

      <div className="w-full md:w-6/12 mt-8 md:mt-16 px-8 md:p-0 flex flex-col justify-evenly ">
        <div>
          <img src="/images/logo-energia-preta.png" className="w-full md:w-2/12 max-w-half h-auto mb-8" alt="Logo" />

          <form onSubmit={handleSubmit((data) => login(data))} className="flex flex-col gap-4 w-full md:w-6/12">
            <div className="border-b-2 focus-within:border-b-primary transition-colors duration-300">
              <Input
                type="text"
                id="username"
                placeholder="Usuário"
                {...register("usu_nome")}
                className="border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
              />
              {errors.usu_nome && <span className="text-red-600">{errors.usu_nome.message}</span>}
            </div>

            <div className="border-b-2 focus-within:border-b-primary transition-colors duration-300">
              <Input
                type="password"
                id="password"
                placeholder="Senha"
                {...register("usu_senha")}
                className="border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
              />
              {errors.usu_senha && <span className="text-red-600">{errors.usu_senha.message}</span>}
            </div>

            {/* <PasswordInput register={register} errors={errors} /> */}

            {loading ? (
              <Button disabled variant="secondary" type="submit" className="hover:bg-primary hover:text-white text-base">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </Button>
            ) : (
              <Button variant="secondary" type="submit" className="hover:bg-primary hover:text-white text-base">
                Login
              </Button>
            )}
          </form>
        </div>

        <div className="mt-8 md:mt-0 md:w-10/12">
          <h1 className="font-semibold text-2xl mb-4"> Energia ERP </h1>
          <p className="text-loginSub">
            O Grupo Energia traça sua trajetória desde a década de 90, quando iniciou suas atividades focando na prestação de serviços
            elétricos em baixa tensão. Movido pela perseverança e uma constante busca por conhecimento, expandiu suas operações para incluir
            instalações elétricas em média e alta tensão. Hoje, a empresa é reconhecida como referência em qualidade e confiabilidade na
            concepção e execução de obras elétricas, cobrindo desde as aplicações em baixa tensão até aquelas de maior complexidade, em
            média e alta tensão.
          </p>
          <br />
          <p className="text-loginSub">
            Além dessa expertise consolidada no setor elétrico, o Grupo Energia também diversificou seus horizontes. Com intuito de
            diversificar os negócios, o grupo energia entrou em 2009 no ramo pecuário, e atualmente também trabalha com equipamento e
            produtos para ordenha e saúde animal.
          </p>
        </div>
      </div>
    </div>
  )
}
