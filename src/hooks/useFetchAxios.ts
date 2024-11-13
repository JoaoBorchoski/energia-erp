// hooks/useFetch.ts
import { api } from "@/infrastructure/api/axios"
import { useState, useEffect } from "react"

export const useFetchAxios = (url: string, method: string, token: string, setLoad: (loading: boolean) => void) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) return
    setLoad(true)

    api({
      method: method,
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setData(response.data)
      setLoad(false)
      setLoading(false)
    })
  }, [url])

  return { data, loading }
}
