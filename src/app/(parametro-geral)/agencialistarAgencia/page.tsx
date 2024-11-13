"use client"

import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import { AuthContext } from "@/context/AuthContext"
import { useFetchAxiosList } from "@/hooks/useFetchAxiosList"
import { useContext, useEffect, useState } from "react"
import { columnsAgencia } from "./table-list/columns"
import { iAgencia } from "./table-list/type"
import FormPage from "@/components/formPage"
import { Box, IconButton, Modal, Tooltip } from "@mui/material"
import Link from "next/link"
import { FaExclamationCircle, FaPlusSquare } from "react-icons/fa"
import { CircleAlert, DeleteIcon, EditIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import AppModal from "@/components/appModal"
import { deleteAgencia, listAgencia } from "@/infrastructure/api/repositories/agenciaRepository"
import { toast } from "@/hooks/use-toast"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import { useRouter } from "next/navigation"
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR"

export default function Agencia() {
  const [listData, setListData] = useState<iAgencia[]>([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedRow, setSelectedRow] = useState<iAgencia | null>(null)
  const { showMenu, user, setLoading } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listAgencia(setLoading)
        setListData(data.data)
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
      }
    }
    fetchData()
  }, [listAgencia])

  const editAgencia = (row: any) => {
    router.push(`/agencialistarAgencia/form/${row.original.age_codigo}`)
  }

  const onDeleteAgencia = async (row: iAgencia) => {
    try {
      const resultData = await deleteAgencia(row.age_codigo, setLoading)
      setOpenModal(false)
      toast({
        title: "Registro removido com sucesso",
        color: "success",
      })
    } catch (error) {
      toast({
        title: "Erro ao remover registro",
        variant: "destructive",
      })
    }
  }

  const openDeleteConfirmModal = (row: iAgencia) => {
    setSelectedRow(row)
    setOpenModal(true)
  }

  const table = useMaterialReactTable<iAgencia>({
    columns: columnsAgencia,
    data: listData,
    paginationDisplayMode: "pages",
    enableEditing: true,
    renderTopToolbarCustomActions: ({ table }) => (
      <Link
        href="/agencialistarAgencia/form/new"
        className="w-full sm:w-2/12 flex text-white bg-formBorder gap-1 hover:bg-formBorder-hover transition-colors duration-300 justify-center items-center p-2 rounded-sm"
      >
        <FaPlusSquare className="text-white rounded-sm" />
        Cadastrar Agência
      </Link>
    ),
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem", width: "1px" }}>
        <Tooltip title="Editar">
          <IconButton onClick={() => editAgencia(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Deletar">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row.original)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    positionActionsColumn: "last",
    localization: MRT_Localization_PT_BR,
  })

  return (
    <>
      <FormPage>
        <MaterialReactTable table={table} />
      </FormPage>

      <AppModal open={openModal} setClose={setOpenModal}>
        <CircleAlert size={100} className="w-full mb-4" color="orange" />
        <h1 className="text-2xl mb-10">Deseja remover este registro?</h1>
        <div className="flex gap-4 items-center justify-center">
          <Button className="w-1/4" variant="destructive" onClick={() => onDeleteAgencia(selectedRow!)}>
            SIM
          </Button>
          <Button className="w-1/4" variant="secondary" onClick={() => setOpenModal(false)}>
            NÃO
          </Button>
        </div>
      </AppModal>
    </>
  )
}
