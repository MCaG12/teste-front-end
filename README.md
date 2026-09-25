# Teste Econverse: Vaga Desenvolvedor Front-End

## Pré-requisitos
 
- [Node.js](https://nodejs.org/) instalado (recomendado LTS mais recente, versão 18+)
- npm (já vem junto com o Node.js)
Para verificar se estão instalados:
 
```bash
node -v
npm -v
```
 
## Instalação
 
Clone o repositório e instale as dependências:
 
```bash
git clone <url-do-repositorio>
cd my-app
npm install
```
 
## Rodando o projeto em desenvolvimento
 
Inicia o servidor local do Vite com hot-reload:
 
```bash
npm run dev
```
 
A aplicação ficará disponível em `http://localhost:5173`.
 
## Estrutura básica do projeto
 
```
my-app/
├── src/
│   ├── components/      # Componentes React
│   ├── scss/            # Arquivos SCSS Modules
│   └── ...
├── package.json
├── tsconfig.json
└── vite.config.ts
```
 
## Scripts disponíveis
 
| Comando          | Descrição                                      |
| ----------------- | ----------------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento             |
| `npm run build`    | Gera o build de produção                        |
