import axios, { AxiosError } from "axios"
import { toast } from "@/hooks/use-toast"
import { destroyCookie, parseCookies } from "nookies"

const { "user.token": token } = parseCookies()

export const api = axios.create({
  baseURL: "http://207.244.238.247:3000",
  // baseURL: process.env.NEXT_PUBLIC_API,

  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use((config) => {
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      destroyCookie(undefined, "user.token", {
        path: "/login",
      })
      localStorage.removeItem("@energia:user")
      // Router.push("/login")

      toast({
        title: "Login Expirado",
        description: "Faça login novamente para continuar",
      })

      api.defaults.headers["Authorization"] = null
    }

    return Promise.reject(error)
  }
)
