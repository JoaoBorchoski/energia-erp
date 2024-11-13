"use client"

import { AuthContext } from "@/context/AuthContext"
import { usePathname } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { Toaster } from "./ui/toaster"
import NextTopLoader from "nextjs-toploader"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import * as fa from "react-icons/fa"
import { Input } from "./ui/input"
import Link from "next/link"
import SetHeader from "./setHeader"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { showMenu, user, menu } = useContext(AuthContext)
  const [search, setSearch] = useState("")

  const pathname = usePathname()

  if (pathname === "/login") {
    return (
      <>
        {children} <NextTopLoader />
      </>
    )
  }

  function MenuItem({ title, icon, subMenu }: any) {
    return (
      <AccordionItem value={title.toLowerCase().replace(/\s+/g, "-")} className="w-full">
        <AccordionTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded">
          <div className="flex items-center space-x-2">
            {icon}
            <span>{title}</span>
          </div>
        </AccordionTrigger>
        {subMenu?.map((item: any) => {
          return (
            <AccordionContent
              key={item.title}
              className=" text-gray-300 hover:bg-gray-700 pb-0 flex justify-center px-1 transition-colors duration-300 rounded-md"
            >
              <Link
                className="w-full text-left py-2 text-sm max-w-full break-words whitespace-normal aligned-link "
                href={`/${item.ace_pasta + item.ace_arquivo}`}
              >
                {item.ace_descricao}
              </Link>
            </AccordionContent>
          )
        })}
      </AccordionItem>
    )
  }

  return (
    <>
      <SetHeader />
      <div className="flex flex-1 pt-16">
        <aside
          className={`bg-gray-800 text-white p-4 flex flex-col overflow-auto transition-all duration-300 ${
            showMenu ? "w-64 w-min-64" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center mb-4">
            <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center">
              <fa.FaUser size={40} className="text-white" />
            </div>
            <h2 className="mt-2 text-lg font-semibold">{user.usu_nome}</h2>
            <p className="text-sm text-gray-400">{user.usu_descricao}</p>
          </div>
          <div className="mb-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Consultar acesso"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none"
              />
              <fa.FaSearch className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {menu.map((item: any) => {
              const mod_html_class = item.mod_html_class
              const IconComponent = fa[mod_html_class as keyof typeof fa]

              return (
                <MenuItem
                  key={item.mod_codigo}
                  title={item.mod_nome}
                  icon={IconComponent ? <IconComponent /> : <fa.FaCogs />}
                  subMenu={item.acesso}
                  className="no-underline hover:no-underline"
                />
              )
            })}
          </Accordion>
        </aside>
        <main className="flex-1">
          <NextTopLoader />
          {children}
        </main>
      </div>
      <Toaster />
    </>
  )
}
