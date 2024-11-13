"use client"

import AppInput from "@/components/appInput"
import FormPage from "@/components/formPage"
import { AuthContext } from "@/context/AuthContext"
import { PessoaFormData, pessoaSchema } from "@/schemas/pessoa"
import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Divider, MenuItem, Select, Tab, Tabs } from "@mui/material"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { FaHouseUser, FaPhone, FaUser } from "react-icons/fa"
import { FaGears } from "react-icons/fa6"
import { MdAttachment } from "react-icons/md"
import { BsPhoneFill } from "react-icons/bs"
import AppSelect from "@/components/appSelect"

type iPessoaParams = {
  params: { pessoaId: string }
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function Pessoa({ params }: iPessoaParams) {
  const { setLoading } = useContext(AuthContext)
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PessoaFormData>({
    resolver: zodResolver(pessoaSchema),
    defaultValues: {
      nome: "",
    },
  })

  const Form = () => {
    return (
      <FormPage>
        <form>
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-3 flex flex-col justify-between">
              <label className="text-sm font-medium text-gray-700">
                Tipo de pessoa: <span className="text-red-600 font-bold ml-1">*</span>
              </label>
              <Select size="small">
                <MenuItem>Física</MenuItem>
                <MenuItem>Jurídica</MenuItem>
                <MenuItem>Estrangeira</MenuItem>
              </Select>
            </div>

            <AppInput label="Código:" name="nome" register={register} errors={errors} className="col-span-3" disabled />
            <AppInput label="FOTO" name="nome" register={register} errors={errors} className="col-span-6" />
            <AppInput label="Nome:" name="nome" register={register} errors={errors} className="col-span-6" required />
            <AppInput label="FOTO" name="nome" register={register} errors={errors} className="col-span-6" />
            <AppInput label="Código externo:" name="nome" register={register} errors={errors} className="col-span-3" />
            <AppInput label="Nome reduzido::" name="nome" register={register} errors={errors} className="col-span-3" />
            <AppInput label="FOTO" name="nome" register={register} errors={errors} className="col-span-6" />
            <AppInput label="Observação" name="nome" register={register} errors={errors} className="col-span-6" />
            <AppInput label="FOTO" name="nome" register={register} errors={errors} className="col-span-6" />

            <AppSelect url="/combobox/modalidade" className="col-span-12" label="Teste" name="nome" register={register} errors={errors} />

            <div className="col-span-6 flex flex-col justify-between">
              <label className="text-sm font-medium text-gray-700">Região:</label>
              <Select size="small">
                <MenuItem>01</MenuItem>
                <MenuItem>02</MenuItem>
                <MenuItem>03</MenuItem>
              </Select>
            </div>
            <div className="col-span-6 flex flex-col justify-between">
              <label className="text-sm font-medium text-gray-700">Segmento:</label>
              <Select size="small">
                <MenuItem>01</MenuItem>
                <MenuItem>02</MenuItem>
                <MenuItem>03</MenuItem>
              </Select>
            </div>
            <div className="col-span-12 flex flex-col justify-between">
              <label className="text-sm font-medium text-gray-700">
                Status: <span className="text-red-600 font-bold ml-1">*</span>
              </label>
              <Select size="small">
                <MenuItem>01</MenuItem>
                <MenuItem>02</MenuItem>
                <MenuItem>03</MenuItem>
              </Select>
            </div>
            <Divider className="col-span-12 mt-6 mb-2" />
            <div className="col-span-12 grid grid-cols-12 gap-x-4">
              <div className="col-span-12">
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Identificação" icon={<FaUser size={20} />} {...a11yProps(0)} />
                    <Tab label="Endereço" icon={<FaHouseUser size={20} />} {...a11yProps(1)} />
                    <Tab label="Contato" icon={<FaPhone size={20} />} {...a11yProps(2)} />
                    <Tab label="Modalidade" icon={<FaGears size={20} />} {...a11yProps(3)} />
                    <Tab label="Anexos" icon={<MdAttachment size={20} />} {...a11yProps(4)} />
                    <Tab label="Venda" icon={<BsPhoneFill size={20} />} {...a11yProps(5)} />
                    <Tab label="Impostos Serviço" icon={<FaGears size={20} />} {...a11yProps(6)} />
                    <Tab label="Configuração Contribuinte" icon={<FaGears size={20} />} {...a11yProps(7)} />
                  </Tabs>
                </Box>
              </div>

              <div className="col-span-12">
                <CustomTabPanel value={value} index={0}>
                  Identificação
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  Endereço
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  Contato
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  Modalidade
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                  Anexos
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                  Venda
                </CustomTabPanel>
                <CustomTabPanel value={value} index={6}>
                  Impostos Serviço
                </CustomTabPanel>
                <CustomTabPanel value={value} index={7}>
                  Configuração Contribuinte
                </CustomTabPanel>
              </div>
            </div>
          </div>
        </form>
      </FormPage>
    )
  }

  return <Form />
}
