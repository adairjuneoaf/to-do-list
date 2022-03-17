<p align="center" display='flex' align-items='center'>
  <img alt="DesafioToDo" src=".github/icon.svg" width="64px">
</p>

<h1 align="center">
    <img alt="GifExampleProject" src="https://i.imgur.com/CyMEsD6.gif" width="1920px" height="auto" />
</h1>

## 💻 Projeto

Você pode acessar o projeto em produção clicando neste link [Acessar Projeto](https://challenge-to-do-list-adairjuneo.vercel.app/)

To.Do app é um desafio para concorrer há uma vaga de estágio. É um app bem simples, disponível para Web e Mobile com funções de inserir, excluir ou editar tarefas que deseje "anotar" para não esquecer. O front-end do projeto foi bem tranquilo para desenvolver, um layout simples, mas bem funcional. O back-end já fornecido atráves de uma API para consumo também simples, mas bem funcional e foi ai onde tive algumas dificuldades, principalmente com relação ao refresh imediato da página ao lançar uma nova tarefa, excluir ou editar. Mas resolvi o problema utilizando **React Query** no app. Para não ter que me preocupar com as rotas do app e cache de páginas, resolvi utilizar o **Next.js** para me auxiliar, poderia até utilizá-lo mais já que possui funcionalidades extraordinárias quando assunto é ISR, SSG e SSR, mas não foi o caso. Acredito que ainda me falta boas práticas de clean code e experiência com React e Next.js em produção real para aprimorar skills.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/docs/getting-started.html)
- [Next.js](https://nextjs.org/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 📚 Bibliotecas

Para auxiliar no desenvolvimento do projeto, utilizei as seguinte bibliotecas:

- [AXIOS](https://axios-http.com/docs/intro)
- [**React Query**](https://react-query.tanstack.com/overview)
- [React Modal](https://reactcommunity.org/react-modal/)
- [ReactHotToast](https://react-hot-toast.com/docs)
- [StyledComponents](https://styled-components.com)

## 🚀 Como executar

Clone o projeto e acesse a pasta, a seguir temos os passos:

```bash
$ git clone https://github.com/adairjuneoaf/to-do-list
$ cd to-do-list
```

\*\* É necessário que você tenha uma API disponível para alimentar o projeto. No caso desse projeto o caminho dessa API deve ser disponibilizado dentro do arquivo `.env.local` com o nome `NEXT_PUBLIC_API_BASE_URL` para rodar o projeto na sua máquina local. Mas, como dito anteriormente, o projeto está disponível em produção clicando nesse [ link](https://challenge-to-do-list-adairjuneo.vercel.app/).

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalar as dependências
$ yarn
# Iniciar o projeto
$ yarn dev
```

O app estará disponível no seu navegador de internet pelo endereço http://localhost:3000.
