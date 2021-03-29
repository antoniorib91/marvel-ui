# Marvel UI

Projeto no github pages: https://antoniorib91.github.io/marvel-ui/

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

### `yarn start` ou `npm run start`

### `yarn build` ou `npm run build`

### Instruções

Para rodar o projeto localmente é necessário criar um arquivo nomeado

.env.local e colocar as variáveis de ambiente. O Projeto roda com um 

proxy local para realizar as requests para a api. Antes de iniciar o server 

é necessário comentar a variável 'defaultURL' que está no arquivo http-client

e descomentar a variável com o mesmo nome que já estava comentada. Deve ser feito o

mesmo processo com a variável 'url' no arquivo rest-comics. Após realizada essas ações roda o comando:

`yarn start` ou `npm run start`

Ao acessar a url `http://localhost:3000` no seu navegador já vai ser possivel acessar

esse projeto. 

### Arquitetura do Projeto

Foi solicitado a criação de Single Page Application então o projeto foi dividido em 

containers para facilitor o entendimento de oque está sendo exibido na tela. Os Components

reutilizaveis forma adiconados na pasta components. As requisições junto com o cliente

estão localizadas nas pasta Rest. Foi centralizado as modelagens que não são de components

na pasta models.
