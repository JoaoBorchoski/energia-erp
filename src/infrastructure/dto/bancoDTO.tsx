"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export type BancoDTO = {
  id: string
  codigo: number
  numero: string
  nome: string
  opcoes: number
}

export const columns: ColumnDef<BancoDTO>[] = [
  {
    accessorKey: "codigo",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Código
          <ArrowUpDown className="ms-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "numero",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Número
          <ArrowUpDown className="ms-2 h-4 w-4" />
        </Button>
      )
    },
  },
  { accessorKey: "nome", header: "Nome" },
  { accessorKey: "opcoes", header: "Opções" },
]
