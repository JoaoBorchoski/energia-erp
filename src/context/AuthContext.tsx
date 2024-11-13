"use client"

import { BancoDTO } from "@/infrastructure/dto/bancoDTO"
import { toast } from "@/hooks/use-toast"
import { api } from "@/infrastructure/api/axios"
import { usePathname, useRouter } from "next/navigation"
import { createContext, useContext, useState, FC, ReactNode, useEffect, useCallback } from "react"
import { getMenus } from "@/infrastructure/api/repositories/menuRepository"
import { getFromCookie, saveToCookie } from "@/infrastructure/api/cookies"
import { validateToken } from "@/infrastructure/api/repositories/token"

interface loginData {
  usu_nome: string
  usu_senha: string
}

interface AuthContextType {
  isAuthenticated: boolean
  loading?: boolean
  setLoading: (loading: boolean) => void
  login: (data: loginData) => void
  logout: () => void
  showMenu: boolean
  setShowMenu: (showMenu: boolean) => void
  user: any
  menu?: any
  isInitialized: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname()
  const router = useRouter()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const [user, setUser] = useState({})
  const [menu, setMenu] = useState([])

  useEffect(() => {
    const initializeUser = async () => {
      setLoading(true)
      try {
        const token = getFromCookie("user.token")
        const validateTokenReq = await validateToken(token)
        const userLocal = localStorage.getItem("@energia:user")

        if (!userLocal || !token || !validateTokenReq) {
          setIsAuthenticated(false)
          await router.push("/login")
          return
        }

        const user = JSON.parse(userLocal)
        const menuGet = await getMenus(validateTokenReq.usu_fk_gru_codigo)

        saveToCookie("user.token", token)
        setMenu(menuGet)
        setUser(user)
      } catch (error) {
        console.error("Failed to initialize user:", error)
        localStorage.clear()
      } finally {
        setIsInitialized(true)
        setLoading(false)
      }
    }

    initializeUser()
  }, [])

  const login = async (data: loginData) => {
    setLoading(true)
    try {
      const [reqToken, reqUser] = await Promise.all([api.post("/auth/token", data), api.post("/auth/login", data)])

      toast({
        title: "Login efetuado com sucesso!",
        color: "success",
      })

      const user = {
        token: reqToken.data.access_token,
        ...reqUser.data,
      }

      localStorage.setItem("@energia:user", JSON.stringify(user))
      saveToCookie("user.token", user.token)

      const menuGet = await getMenus(reqUser.data.usu_fk_gru_codigo)

      setMenu(menuGet)
      setUser(reqUser.data)
      setIsAuthenticated(true)
      router.push("/home")
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Erro ao fazer login",
        description: "Não foi possível fazer login. Por favor, tente novamente.",
        variant: "destructive",
      })
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("@energia:user")
    setIsAuthenticated(false)
    setIsInitialized(true)
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        loading,
        showMenu,
        setShowMenu,
        user,
        menu,
        isInitialized,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
