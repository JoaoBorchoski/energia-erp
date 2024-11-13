"use client"

import { CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FaPlusSquare } from "react-icons/fa"
import { Input } from "@mui/material"
import { Label } from "@radix-ui/react-label"
import { ComboboxPag } from "@/components/ui/combo-pag"
import { DataTable } from "./table-list/data-table"
import { BancoDTO, columns } from "../../../infrastructure/dto/bancoDTO"
import { useEffect, useState } from "react"
import { getListBanco } from "@/infrastructure/api/repositories/bancoRepository"
import FormPage from "@/components/formPage"
import Link from "next/link"

export default function BancoList() {
  const [data, setData] = useState<BancoDTO[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await getListBanco())
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
      }
    }
    fetchData()
  }, [getListBanco])

  return (
    <FormPage className="p-0">
      <CardHeader className="p-4 flex flex-row justify-between">
        <Link
          href="/bancolistarBanco/form"
          className="w-full sm:w-2/12 flex text-white bg-formBorder gap-1 hover:bg-formBorder-hover transition-colors duration-300 justify-center items-center p-2 rounded-sm"
        >
          <FaPlusSquare className="text-white rounded-sm" />
          Cadastrar Banco
        </Link>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <Label className="">Localizar:</Label>
            <div className="border focus-within:border-green-600 transition-colors border-solid border-gray-300  rounded-md duration-300">
              <Input disableUnderline={true} type="email" className="w-full md:w-12/12 ounded-md px-3 " />
            </div>
          </div>
          <div className="flex items-center gap-1 justify-end">
            <Label>Exibir </Label>
            <ComboboxPag></ComboboxPag>
            <Label>registros por página</Label>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <DataTable columns={columns} data={data} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>163 registros encontrados - Exibindo página 1 de 4</p>
        <p>paginador</p>
      </CardFooter>
    </FormPage>
  )
}
