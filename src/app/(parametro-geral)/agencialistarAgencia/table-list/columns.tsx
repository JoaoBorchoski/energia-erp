import { createMRTColumnHelper } from "material-react-table"
import { iAgencia } from "./type"

const columnHelper = createMRTColumnHelper<iAgencia>()

export const columnsAgencia = [
  columnHelper.accessor((row) => row.banco.ban_descricao, {
    id: "banco",
    header: "Banco",
  }),
  columnHelper.accessor("age_agencia", {
    header: "Agência",
  }),
  // columnHelper.accessor("age_codigo", {
  //   header: "Código",
  //   size: 5,
  // }),
  // columnHelper.accessor("age_fk_ban_codigo", {
  //   header: "Código do Banco",
  //   size: 5,
  // }),
  columnHelper.accessor("age_numero", {
    header: "Número",
    size: 40,
  }),
  columnHelper.accessor("age_uf", {
    header: "UF",
    size: 40,
  }),
]
