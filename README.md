# Jogo da Velha Acadêmico

Aplicação web desenvolvida como projeto acadêmico para praticar a construção de interfaces e a organização de um projeto TypeScript com front-end, servidor e código compartilhado.

## O que o projeto demonstra

O repositório utiliza uma estrutura separada para cliente, servidor e arquivos compartilhados. A aplicação foi organizada com Vite, React e TypeScript, com configurações de formatação, checagem estática e build de produção.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React | Interface da aplicação |
| TypeScript | Tipagem estática |
| Vite | Servidor de desenvolvimento e build |
| Express | Servidor da aplicação |
| Wouter | Navegação |
| Tailwind CSS | Estilização |
| pnpm | Gerenciamento de dependências |

## Como executar

Pré-requisitos: Node.js 20 ou superior e pnpm.

```bash
git clone https://github.com/Raydev15/jogo-da-velha-academico.git
cd jogo-da-velha-academico
pnpm install
pnpm dev
```

Para validar os tipos e gerar a versão de produção:

```bash
pnpm check
pnpm build
pnpm start
```

Para visualizar o build do front-end durante o desenvolvimento:

```bash
pnpm preview
```

## Estrutura principal

```text
client/       # Interface da aplicação
server/       # Servidor e lógica de execução
shared/       # Tipos e estruturas compartilhadas
patches/      # Ajustes de dependências
vite.config.ts
package.json
```

## Status

Projeto acadêmico mantido como parte do portfólio de estudos em desenvolvimento web e TypeScript.

## Licença

Este projeto é destinado a fins educacionais e de portfólio.
