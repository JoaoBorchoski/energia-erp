// hooks/useFetch.ts
import { api } from "@/infrastructure/api/axios"
import { useState, useEffect } from "react"

export const useFetchAxiosList = (url: string, method: string, token: string, setLoad: (loading: boolean) => void) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) return

    api({
      method: method,
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      const responseData = response.data.data
      setData(responseData)
      setLoad(false)
      setLoading(false)
    })
  }, [url])

  return { data, loading }
}
