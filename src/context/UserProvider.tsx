"use client"

import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { api } from "@/infrastructure/api/axios"

interface UserContextType {
  user: any
  setUser: (user: any) => void
  menu: any
}

export const UserContext = createContext({} as UserContextType)

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { user: currentUser } = useContext(AuthContext)
  const [user, setUser] = useState({})
  const [menu, setMenu] = useState([])

  // useEffect(() => {
  //   async function getMenu() {
  //     try {
  //       const userLocal = localStorage.getItem("@energia:user")
  //       const user = JSON.parse(userLocal!)
  //       api.defaults.headers.common.authorization = `Bearer ${user.token}`
  //       api.defaults.headers.common["Content-Type"] = "application/json"

  //       const req = await api.post(`/acesso-modulo/menu/${currentUser?.usu_fk_gru_codigo}`)

  //       // req.data.sort((a: any, b: any) => a.mod_nome.localeCompare(b.mod_nome))

  //       setMenu(req.data)
  //     } catch (error) {
  //       // console.log("Erro na requisição:", error)
  //     }
  //   }
  //   getMenu()
  // }, [])

  return <UserContext.Provider value={{ user, setUser, menu }}>{children}</UserContext.Provider>
}
