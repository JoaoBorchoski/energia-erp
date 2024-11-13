import { cn } from "@/lib/utils"
import React from "react"

export default function FormPage({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-4 m-4 border-formBorder border rounded-lg flex-grow", className)}>{children}</div>
}
