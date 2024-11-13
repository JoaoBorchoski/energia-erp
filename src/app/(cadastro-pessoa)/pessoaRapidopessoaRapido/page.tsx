import FormPage from "@/components/formPage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import SearchIcon from "@mui/icons-material/Search"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import FormCard from "@/components/formCard"
interface CadastroParams {
  params: {
    cadastroRapidoPessoaId: string
  }
}

export default async function CadastroRapidoPessoaId() {
  return (
    <FormPage>
      <form action="submit">
        <div className="flex flex-wrap justify-between">
          <div className="w-[49%]">
            <label className="text-sm font-medium text-gray-700">
              CNPJ / CPF <span className="text-red-600 font-bold ml-1">*</span>
            </label>
            <Input className="focus:border-formBorder focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300" />
          </div>

          <div className="w-[49%]">
            <label className="text-sm font-medium text-gray-700">IE / RG</label>
            <Input
              placeholder="Informe apenas se houver"
              className="focus:border-formBorder focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300"
            />
          </div>

          <div className="w-full">
            <label className="text-sm font-medium text-gray-700">
              Nome <span className="text-red-600 font-bold ml-1">*</span>
            </label>
            <Input className="focus:border-formBorder focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300" />
          </div>

          <div className="w-full sm:w-[32%]">
            <label className="text-sm font-medium text-gray-700">Região</label>
            <Select>
              <SelectTrigger className="focus:border-formBorder focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300">
                <SelectValue placeholder="SELECIONE" />
              </SelectTrigger>
            </Select>
          </div>

          <div className="w-full sm:w-[32%]">
            <label className="text-sm font-medium text-gray-700">Segmento</label>
            <Select>
              <SelectTrigger className="focus:border-formBorder focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300">
                <SelectValue placeholder="SELECIONE" />
              </SelectTrigger>
            </Select>
          </div>

          <div className="w-full sm:w-[32%]">
            <label className="text-sm font-medium text-gray-700">Modalidade</label>
            <Select>
              <SelectTrigger className="focus:border-formBorder focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 transition-colors duration-300">
                <SelectValue placeholder="SELECIONE" />
              </SelectTrigger>
            </Select>
          </div>

          <FormCard title="Endereço">
            <div className="border border-formBorder p-4 rounded-b-md flex flex-wrap gap-x-2 justify-between">
              <div className="w-full">
                <label className="text-sm font-medium text-gray-700">
                  Tipo de endereço <span className="text-red-600 font-bold ml-1">*</span>
                </label>
                <Select>
                  <SelectTrigger className="focus:border-formBorder focus:outline-none transition duration-300">
                    <SelectValue placeholder="SELECIONE" />
                  </SelectTrigger>
                </Select>
              </div>
              <div className="w-full sm:w-1/4">
                <label className="text-sm font-medium text-gray-700">
                  CEP <span className="text-red-600 font-bold ml-1">*</span>
                </label>
                <div className="flex items-center">
                  <Input type="email" placeholder="Email" className="flex-grow rounded-r-none" />
                  <Button type="submit" variant="secondary" className="rounded-l-none rounded-r-md">
                    <SearchIcon />
                  </Button>
                </div>
              </div>
              <div className="w-full sm:w-[74.4%]">
                <label className="text-sm font-medium text-gray-700">
                  Logradouro <span className="text-red-600 font-bold ml-1">*</span>
                </label>
                <Input className="focus:border-formBorder focus:outline-none transition duration-300" />
              </div>
              <div className="w-full sm:w-1/4">
                <label className="text-sm font-medium text-gray-700">
                  UF <span className="text-red-600 font-bold ml-1">*</span>
                </label>
                <Select>
                  <SelectTrigger className="focus:border-formBorder focus:outline-none transition duration-300">
                    <SelectValue placeholder="SELECIONE" />
                  </SelectTrigger>
                </Select>
              </div>
              <div className="w-full sm:w-[49.3%]">
                <label className="text-sm font-medium text-gray-700">
                  Município <span className="text-red-600 font-bold ml-1">*</span>
                </label>
                <Select>
                  <SelectTrigger className="focus:border-formBorder focus:outline-none transition duration-300">
                    <SelectValue placeholder="SELECIONE" />
                  </SelectTrigger>
                </Select>
              </div>
              <div className="w-full sm:w-[24.6%]">
                <label className="text-sm font-medium text-gray-700">
                  Número <span className="text-red-600 font-bold ml-1">*</span>
                </label>
                <Input className="focus:border-formBorder focus:outline-none transition duration-300" />
              </div>
              <div className="w-full sm:w-1/4">
                <label className="text-sm font-medium text-gray-700">Bairro</label>
                <Input className="focus:border-formBorder focus:outline-none transition duration-300" />
              </div>
              <div className="w-full sm:w-[74.4%]">
                <label className="text-sm font-medium text-gray-700">Complemento</label>
                <Input
                  placeholder="Informe apenas se houver"
                  className="focus:border-formBorder focus:outline-none transition duration-300"
                />
              </div>
            </div>
          </FormCard>

          <FormCard title="Contato">
            <div className="border border-formBorder p-4 rounded-b-md flex flex-wrap gap-x-2 justify-between">
              <div className="w-full sm:w-[32%]">
                <label className="text-sm font-medium text-gray-700">
                  Contato <span className="text-red-600 font-bold ml-1">*</span>
                </label>
                <Input className="focus:border-formBorder focus:outline-none transition duration-300" />
              </div>
              <div className="w-full sm:w-[32%]">
                <label className="text-sm font-medium text-gray-700">
                  Telefone <span className="text-red-600 font-bold ml-1">*</span>
                </label>
                <Input className="focus:border-formBorder focus:outline-none transition duration-300" />
              </div>
              <div className="w-full sm:w-[32%]">
                <label className="text-sm font-medium text-gray-700">E-mail</label>
                <Input
                  placeholder="Informe apenas se houver"
                  className="focus:border-formBorder focus:outline-none transition duration-300"
                />
              </div>
            </div>
          </FormCard>

          <div className="w-full bg-gray-200 p-4 mt-4 rounded-md flex items-center justify-center gap-2">
            <Button className="bg-save text-white w-1/12 flex gap-3 justify-center items-center hover:bg-save">
              <CheckIcon /> Salvar
            </Button>
            <Button className="bg-cancel text-white w-1/12 flex gap-3 justify-center items-center hover:bg-cancel">
              <CloseIcon /> Cancelar
            </Button>
          </div>
        </div>
      </form>
    </FormPage>
  )
}
