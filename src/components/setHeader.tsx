"use client"

import { usePathname } from "next/navigation"
import { FaMoneyBillAlt, FaWrench, FaBell, FaBars, FaUser, FaCar, FaUsers, FaUniversity, FaSignOutAlt } from "react-icons/fa"
import { AuthContext } from "@/context/AuthContext"
import { useContext, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function SetHeader() {
  useEffect(() => {
    console.log("SetHeader")
  }, [])

  const { logout, setShowMenu, showMenu } = useContext(AuthContext)
  switch (usePathname()) {
    case "/login":
      return
    default:
      return (
        <header className="bg-gray-700 px-4 h-16 flex items-center justify-between fixed top-0 left-0 w-full z-50">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-black px-3 py-2 rounded" onClick={() => setShowMenu(!showMenu)}>
              <FaBars className="text-white text-x" />
            </button>
            <div>
              <h1 className="text-white text-lg font-semibold">Home</h1>
              <p className="text-gray-300 text-sm">Você está em: Principal</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="text-white font-semibold">GRUPO ENERGIA</div>
            <FaMoneyBillAlt className="text-white text-xl" />
            <FaWrench className="text-white text-xl" />
            <FaBell className="text-white text-xl" />
            <FaUser className="text-white text-xl" />
            <FaCar className="text-white text-xl" />
            <FaUsers className="text-white text-xl" />

            <div className="relative">
              <FaUniversity className="text-white text-xl" />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-md flex items-center justify-center">
                2
              </span>
            </div>

            <button className="bg-red-600 text-white px-4 py-2 rounded flex items-center space-x-1" onClick={logout}>
              <FaSignOutAlt />
              <span>Sair</span>
            </button>
          </div>
        </header>
      )
  }
}
