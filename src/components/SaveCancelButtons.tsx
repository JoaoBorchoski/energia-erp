import { CheckIcon, ShieldCloseIcon } from "lucide-react"
import { Button } from "./ui/button"

export default function SaveCancelButtons({ saveFuncion, cancelFunction }: any) {
  return (
    <div className="col-span-12 bg-gray-200 p-4 mt-4 rounded-md flex items-center justify-center gap-2">
      <Button
        onClick={saveFuncion}
        className="bg-save text-white w-1/12 flex gap-3 justify-center items-center hover:bg-save  focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
      >
        <CheckIcon /> Salvar
      </Button>
      <Button
        onClick={cancelFunction}
        className="bg-cancel text-white w-1/12 flex gap-3 justify-center items-center hover:bg-cancel  focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
      >
        <ShieldCloseIcon /> Cancelar
      </Button>
    </div>
  )
}
