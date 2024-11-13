"use client"
"use strict"

import { getComboBox } from "@/infrastructure/api/repositories/comboBox"
import { MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"

type iAppSelectProps = {
  url: string
  label: string
  name: string
  register: any
  errors: any
  className: string
  required?: boolean
  disabled?: boolean
}

export default function AppSelect({ url, label, name, register, errors, className, required, disabled }: iAppSelectProps) {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await getComboBox(url).then((response) => {
      setData(response)
    })
  }

  return (
    <div className={className}>
      <label className="text-sm font-medium text-gray-700">
        {label} {required ? <span className="text-red-600 font-bold ml-1">*</span> : null}
      </label>
      <Select size="small" className="w-full" disabled={disabled} {...register(name)}>
        {data.map((item: any) => (
          <MenuItem key={item.id} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {errors?.[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
    </div>
  )
}
