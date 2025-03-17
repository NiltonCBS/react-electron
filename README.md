# DevClients

<p align="center">
  <img src="/api/placeholder/200/200" alt="Logo DevClients" />
</p>

Uma aplicação desktop construída com Electron para gerenciamento de informações de clientes através de uma interface CRUD simples e eficiente.

## 📋 Visão Geral

DevClients é uma aplicação desktop multiplataforma criada para fins educacionais, projetada para oferecer um gerenciamento de clientes com um painel intuitivo. A aplicação utiliza:

- **Electron** - Para funcionalidade desktop multiplataforma
- **React** - Componentes de UI frontend
- **TailwindCSS** - Framework CSS utilitário para estilização
- **PouchDB** - Banco de dados incorporado para armazenamento de dados offline-first
- **Node.js** - Ambiente de execução backend
- **TypeScript** - Tipagem estática para melhor desenvolvimento

## 🚀 Funcionalidades

- Operações completas de CRUD para gerenciamento de clientes
- Painel interativo para monitoramento e análise
- Abordagem offline-first com sincronização de dados
- Design responsivo que funciona em todas as plataformas desktop

## 💻 Configuração de Desenvolvimento

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm (incluído com Node.js)

### IDE Recomendada

- [VSCode](https://code.visualstudio.com/) com as seguintes extensões:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Desenvolvimento

Execute a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

### Compilação para Produção

Compile a aplicação para sua plataforma alvo:

```bash
# Para Windows
npm run build:win

# Para macOS
npm run build:mac

# Para Linux
npm run build:linux
```

## 🧰 Stack Tecnológica

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js
- **Banco de Dados**: PouchDB
- **Framework Desktop**: Electron
- **Linguagem**: TypeScript

## 📝 Estrutura do Projeto

```
DEVCLIENTS/
├── .vscode/               # Configurações do VS Code
├── build/                 # Arquivos de build compilados
├── resources/             # Recursos da aplicação
├── src/                   # Código fonte
│   ├── main/              # Processo principal do Electron
│   │   ├── index.ts       # Ponto de entrada principal
│   │   ├── ipc.ts         # Comunicação entre processos
│   │   ├── shortcuts.ts   # Atalhos de teclado
│   │   ├── store.ts       # Gerenciamento de estado
│   │   └── tray.ts        # Funcionalidade da bandeja do sistema
│   ├── preload/           # Scripts de pré-carregamento
│   │   └── index.ts       # Script de pré-carregamento
│   └── renderer/          # Processo de renderização (UI)
│       ├── src/           # Código fonte do frontend
│       │   ├── components/# Componentes React reutilizáveis
│       │   ├── lib/       # Bibliotecas e utilitários
│       │   ├── pages/     # Páginas da aplicação
│       │   └── styles/    # Estilos CSS/Tailwind
│       ├── App.tsx        # Componente App principal
│       ├── env.d.ts       # Definições de tipos de ambiente
│       ├── main.tsx       # Ponto de entrada do React
│       ├── postcss.config.js # Configuração do PostCSS
│       ├── Routes.tsx     # Configuração de rotas
│       ├── tailwind.config.js # Configuração do Tailwind
│       └── index.html     # Arquivo HTML principal
├── shared/types           # Tipos compartilhados
├── .gitignore             # Arquivos ignorados pelo Git
├── .prettierignore        # Arquivos ignorados pelo Prettier
├── .prettierrc.yaml       # Configuração do Prettier
└── electron-builder.yml   # Configuração do Electron Builder
```
