# LP Harry Potter

Landing page que consome a [HP-API](https://hp-api.onrender.com/) e exibe personagens da saga Harry Potter com imagem, nome, data de nascimento, casa, patrono, ator e status (vivo/falecido).

> **Deploy:** _(adicionar link da Vercel após o deploy)_

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) como bundler/dev server
- [Sass (SCSS)](https://sass-lang.com/) com CSS Modules para estilização
- API REST (HP-API) consumida via `fetch` nativo

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- [npm](https://www.npmjs.com/) (já vem com o Node)

## Como rodar localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/EmmanuelCM10/lp-harry-potter.git
cd lp-harry-potter

# 2. Instalar as dependências
npm install

# 3. Subir o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Scripts disponíveis

| Comando           | O que faz                                                     |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Sobe o ambiente de desenvolvimento com hot reload             |
| `npm run build`   | Gera a build de produção em `dist/`                           |
| `npm run preview` | Roda a build de produção localmente para conferir o resultado |
| `npm run lint`    | Roda o ESLint no projeto                                      |

## Estrutura do projeto

```
src/
├── components/        # Componentes de UI (Header, CharacterCard, etc.)
├── hooks/             # Hooks customizados (useCharacters)
├── services/          # Integração com a API
├── types/             # Tipagens TypeScript
├── utils/             # Funções utilitárias (formatação de data)
├── styles/            # Estilos globais (variáveis, mixins, reset)
├── App.tsx            # Componente raiz
└── main.tsx           # Entry point da aplicação
```
