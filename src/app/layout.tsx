// app/layout.tsx
import "./styles/globals.css"
import { Inter } from "next/font/google"
import { Providers } from "@/context/Provider"
import AppLayout from "@/components/appLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Energia ERP",
  description: "Generated by Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <Providers>
        <body className="font-sans antialiased min-h-screen flex flex-col">
          <AppLayout>{children}</AppLayout>
        </body>
      </Providers>
    </html>
  )
}
