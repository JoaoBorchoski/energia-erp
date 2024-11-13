import { createMRTColumnHelper } from "material-react-table"
import { iPessoa } from "./type"

const columnHelper = createMRTColumnHelper<iPessoa>()

export const columnsPessoa = [
  columnHelper.accessor("nome", {
    header: "Nome",
  }),
]
