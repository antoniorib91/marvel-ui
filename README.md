# Getting Started with Create React App

# Marvel UI

Nesse nesse projeto foi utilizado:

ReactJS
Typescript
Styled-Compenents
Styled-React-Modal
React-Awesome-Styled-Grid
Axios

## Variáveis de Ambiente

`REACT_APP_PUBLIC_KEY` - Variável com a chave publica para acesso a API
`REACT_APP_PRIVATE_KEY`- Variável com a chave privada para acesso a API
`REACT_APP_API_MARVEL` - Variável coma URL da API

## API

Marvel Comics: https://gateway.marvel.com//v1/public/comics

## Scripts 

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn build`

### Instruções

Para rodar o projeto localmente é necessário criar um arquivo nomeado

.env.local com as variáveis de ambiente, e então rodar o comando 

`yarn start`

para rodar o servidor do projeto localmente um proxy que redireciona as requests 

para a api. No Arquivo RestComics tem um método chamdo getComicsEnvDev que aponta 

para a endpoint do proxy reverso, fazendo assim a request não precisar encaminhar

outros parametros de autenticação pelo frontend, pois está sendo realizado no proxy.

Ao acessar a url `http://localhost:3000` no seu navegador já vai ser possivel acessar

esse projeto. Caso ocorra algum proble ao realizar e não apareça nenhum quadrinho,

é necessário utilizar  o getComicsEnvDev para fazer as requisições a  API quando estiver

em desenvolvimento.

### Arquitetura do Projeto

Foi solicitado a criação de Single Page Application então o projeto foi dividido em 

containers para facilitor o entendimento de oque está sendo exibido na tela. Os Components

reutilizaveis forma adiconados na pasta components. As requisições junto com o cliente

estão localizadas nas pasta Rest. Foi centralizado as modelagens que não são de components

na pasta models.
