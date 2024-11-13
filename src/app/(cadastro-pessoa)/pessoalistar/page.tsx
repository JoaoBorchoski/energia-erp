"use client"

import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import { iPessoa } from "./table-list/type"
import { columnsPessoa } from "./table-list/columns"
import Link from "next/link"
import { FaPlusSquare } from "react-icons/fa"
import { Box, IconButton, Modal, Tooltip } from "@mui/material"
import { DeleteIcon, EditIcon } from "lucide-react"
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR"
import FormPage from "@/components/formPage"

export default function PessoaListar() {
  const table = useMaterialReactTable<iPessoa>({
    columns: columnsPessoa,
    data: [],
    paginationDisplayMode: "pages",
    enableEditing: true,
    renderTopToolbarCustomActions: ({ table }) => (
      <Link
        href="/pessoalistar/form/new"
        className="w-full sm:w-2/12 flex text-white bg-formBorder gap-1 hover:bg-formBorder-hover transition-colors duration-300 justify-center items-center p-2 rounded-sm"
      >
        <FaPlusSquare className="text-white rounded-sm" />
        Cadastrar Pessoa
      </Link>
    ),
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem", width: "1px" }}>
        <Tooltip title="Editar">
          <IconButton onClick={() => console.log("Edit")}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Deletar">
          <IconButton color="error" onClick={() => console.log("Delete")}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    positionActionsColumn: "last",
    localization: MRT_Localization_PT_BR,
  })

  return (
    <FormPage>
      <MaterialReactTable table={table} />
    </FormPage>
  )
}
