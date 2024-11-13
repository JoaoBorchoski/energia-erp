
# Front-End para o ERP do Grupo Energia

Este projeto implementa a interface do usuário para o **ERP do Grupo Energia**, utilizando **React** com **Next.js** para construção da interface, **Tailwind CSS** para estilização, e **ShadCN/UI** para os componentes da interface.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos.
- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para criar interfaces responsivas e modernas.
- **[Axios](https://axios-http.com/)**: Biblioteca para fazer requisições HTTP.
- **[Zod](https://zod.dev/)**: Biblioteca de validação de dados e esquemas TypeScript.
- **[ShadCN/UI](https://shadcn.dev/)**: Componentes de interface baseados em **Radix UI** e **Tailwind CSS**.

## Estrutura de Pastas

A estrutura do projeto é organizada da seguinte maneira:

```
app/                      # Pasta de funcionalidades do aplicativo
components/                # Componentes reutilizáveis da interface
context/                   # Contextos globais da aplicação
hooks/                     # Hooks customizados
infrastructure/            # Configurações e integrações externas
lib/                       # Funções auxiliares e utilitárias
router/                    # Configuração de rotas
schemas/                   # Validações e definições de esquemas (ex: Yup)
styles/                    # Arquivos de estilo global, como o Tailwind CSS
@types/                    # Definições de tipos TypeScript
utils/                     # Funções utilitárias gerais
node_modules/              # Módulos instalados
components.json            # Configuração dos componentes do ShadCN/UI
middleware.ts              # Middlewares da aplicação
next-env.d.ts              # Tipos gerados automaticamente para o Next.js
package.json               # Dependências e scripts do projeto
pnpm-lock.yaml             # Arquivo de lock do PNPM
pnpm-workspace.yaml        # Configuração de workspace do PNPM
postcss.config.js          # Configuração do PostCSS
tailwind.config.ts         # Configuração do Tailwind CSS
tsconfig.json              # Configuração do TypeScript
```

## Instalação e Configuração

### 1. Clonar o Repositório

```bash
git clone https://seu-repositorio.git
cd nome-do-projeto-front
```

### 2. Instalar Dependências

O projeto utiliza **PNPM** como gerenciador de pacotes. Instale as dependências executando o seguinte comando:

```bash
pnpm install
```

### 3. Configurar o Arquivo `.env`

Crie um arquivo **`.env.local`** na raiz do projeto com as variáveis de ambiente necessárias para a aplicação. Aqui está um exemplo:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

O valor de `NEXT_PUBLIC_API_URL` deve apontar para a URL da sua API do ERP (caso esteja rodando localmente, use `http://localhost:3000`).

### 4. Executar o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
pnpm run dev
```

O aplicativo estará disponível em `http://localhost:3000`.

## Estilização

Este projeto utiliza **Tailwind CSS** para estilização e **ShadCN/UI** para componentes prontos e customizáveis. O arquivo de configuração do Tailwind está localizado em **`tailwind.config.ts`**, e os estilos globais podem ser encontrados em **`styles/globals.css`**.

### Exemplo de Uso do Tailwind com Componentes ShadCN/UI:

```tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button>Bem-vindo ao ERP do Grupo Energia</Button>
    </div>
  );
}
```

## Estrutura de Componentes (ShadCN/UI)

Os componentes baseados em **ShadCN/UI** são utilizados para criar uma interface padronizada e responsiva. Você pode instalar e configurar novos componentes conforme necessário.

### Como Adicionar Componentes com ShadCN/UI

1. Para adicionar novos componentes ao projeto, você pode usar o CLI do ShadCN:

```bash
pnpm dlx shadcn@latest add button
```

2. Os componentes serão adicionados à pasta **`components/ui/`** e você pode importá-los conforme necessário.

### Exemplo de Componente com ShadCN/UI:

```tsx
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <Button variant="default">
      Clique Aqui
    </Button>
  );
}
```

## Rotas

O **Next.js** usa o sistema de rotas baseado em páginas. Cada arquivo dentro da pasta **`pages/`** se torna uma rota acessível pela URL correspondente.

### Páginas

- **`/`**: Página inicial
- **`/login`**: Página de login

## Chamadas à API

Utilizamos o **Axios** para fazer chamadas à API. As funções de chamada à API estão organizadas na pasta **`src/utils/`**.

### Exemplo de Chamada à API:

```tsx
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};
```

## Dependências do Projeto

Aqui estão as principais dependências do projeto listadas no **`package.json`**:

```json
"dependencies": {
  "@radix-ui/react-icons": "^1.3.0",
  "@radix-ui/react-slot": "^1.1.0",
  "@shadcn/ui": "^0.0.4",
  "axios": "^1.7.7",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.1",
  "lucide-react": "^0.447.0",
  "next": "latest",
  "nookies": "^2.5.2",
  "react": "latest",
  "react-dom": "latest",
  "tailwind-merge": "^2.5.3",
  "tailwindcss-animate": "^1.0.7",
  "yup": "^0.32.11"
}
```

## Testes

Os testes podem ser escritos usando **Jest** e **React Testing Library**. Para rodar os testes, execute:

```bash
pnpm run test
```

## Documentação das Tecnologias Utilizadas

Aqui estão os links para a documentação das principais tecnologias utilizadas neste projeto:

- [Next.js - Documentação Oficial](https://nextjs.org/docs)
- [React - Documentação Oficial](https://reactjs.org/docs)
- [Tailwind CSS - Documentação Oficial](https://tailwindcss.com/docs)
- [Axios - Documentação Oficial](https://axios-http.com/docs/intro)
- [Yup - Documentação Oficial](https://github.com/jquense/yup)
- [Radix UI - Documentação Oficial](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [ShadCN/UI - Documentação Oficial](https://shadcn.dev/)

## Instruções para Deploy

### 1. Build da Aplicação

Para preparar a aplicação para produção, gere o build com o seguinte comando:

```bash
npm run build
```

### 2. Rodar em Produção

Depois de gerar o build, você pode rodar o servidor em modo de produção com:

```bash
pnpm run start
```

A aplicação será servida em produção no endereço configurado.

## Contribuições

Se você deseja contribuir com este projeto, siga os seguintes passos:

1. Faça um fork do repositório.
2. Crie um branch para sua feature (`git checkout -b minha-feature`).
3. Faça commit de suas alterações (`git commit -m 'Adiciona minha feature'`).
4. Faça push para o branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é de propriedade do **Grupo Energia** e não pode ser distribuído ou modificado sem autorização.
