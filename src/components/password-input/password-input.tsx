import { useState } from "react"

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import { Input } from "@mui/material"

const PasswordInput = ({ register, errors }: any) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="border-b-2 border-gray-300 focus-within:border-b-primary transition-colors duration-300 relative">
      <Input
        type={showPassword ? "text" : "password"}
        id="password"
        placeholder="Senha"
        {...register("usu_senha")}
        className="border-none focus:outline-none focus:ring-0 focus:border-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:border-transparent w-full pr-10"
      />
      {errors.usu_senha && <span className="text-red-600">{errors.usu_senha.message}</span>}

      {/* Ícone para alternar a visibilidade da senha */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-2 text-gray-500"
        aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
      >
        {showPassword ? <VisibilityOffOutlinedIcon className="h-5 w-5" /> : <RemoveRedEyeOutlinedIcon className="h-5 w-5" />}
      </button>
    </div>
  )
}

export default PasswordInput
