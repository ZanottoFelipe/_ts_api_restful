# Projeto API RESTful com TypeScript e MongoDB

Este é um projeto de uma API RESTful construída com TypeScript, seguindo a estrutura MVC (Model-View-Controller) e utilizando MongoDB como banco de dados.

## Requisitos

- Node.js (versão 14 ou superior)
- MongoDB (instância local ou remota)

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/ZanottoFelipe/_ts_api_restful.git
```

### 2. Acesse o diretório do projeto

```bash
cd api_restful
```

### 3. Instale as dependências

```bash
npm install
```

## Configuração

### 3. Instale as dependências

- Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
  DB_USER= seu-usuario-de-conexao-mongodb
  DB_PASS= sua-string-de-conexao-mongodbU

## Iniciar projeto

```bash
npm run dev
```

## Estrutura do Projeto

- A estrutura do projeto segue o padrão MVC:

```bash
src/
├── controllers/   # Controladores
├── models/        # Modelos
├── routes/        # Rotas
├── services/      # Serviços
├── utils/         # Utilitários
└── app.ts         # Arquivo principal da aplicação

```
