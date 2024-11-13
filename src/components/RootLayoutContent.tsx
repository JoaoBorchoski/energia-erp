"use client"

import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"
import FullScreenLoadingSpinner from "@/components/fullScreenLoadingSpinner"

export default function RootLayoutContent({ children }: { children: React.ReactNode }) {
  // const { isInitialized, loading } = useContext(AuthContext)

  // if (!isInitialized || loading) {
  //   return <FullScreenLoadingSpinner />
  // }

  return <>{children}</>
}
