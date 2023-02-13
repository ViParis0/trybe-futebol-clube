# Este é meu projeto Trybe Futebol Clube, desenvolvido na Trybe

## Alguns comentários

O TFC é um site informativo sobre partidas e classificações de futebol.

Neste projeto, estou criando um back-end dockerizado, aplicando modelagem de dados com o Sequelize. Estou desenvolvendo a solução de acordo com as especificações de negócio e minha API será integrada ao front-end existente para consumo dos dados.

Para adicionar uma partida, é necessário ter um token, então a pessoa precisa estar logada para fazer alterações. Eu criei o relacionamento entre as tabelas de times e partidas para atualizar as informações das partidas.

Meu back-end implementa regras de negócio para popular adequadamente a tabela disponível no front-end, que será exibida para o usuário do sistema.

## Como executar o projeto

### Para instalar e executar este projeto, você precisará ter Node.js instalado em sua máquina.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir tfc
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd tfc
  git clone git@github.com:ViParis0/trybe-futebol-clube.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm install** para instalar todas as dependências necessárias:
```javascript
  cd trybe-futebol-clube
  npm install  
```
4. Nesse projeto tbm é necessário instalar as dependencias no frontend e backend para rodar toda a aplicação:
```javascript
  cd app
  cd backend
  npm install 
  cd ..
  cd frontend
  npm install 
```
5. Para rodar a aplicação é necessário iniciar o backend e o frontend em terminais diferentes:
```javascript
  cd backend
  npm start
  cd frontend
  npm start  
```

* O frontend ficara disponivel no endpoint: http://localhost:3000/
* O backend ficara disponivel no endpoint: http://localhost:3001/

## Endpoints:

1. Post `/login`: para fazer login é preciso de um token válido
2. Get `/teams`: devolve uma lista de times
3. Get `/teams:id`: devolve o time de ID especifico 
4. Get `/matches`: devolve uma lista de partidas
5. Post `/matches`: Cria uma nova partida, é preciso de um token válido
6. Patch `/matches/:id/finish`: para terminar uma partida
7. Patch `/matches/:id`: para atualizar um placar
8. Get `/leaderboard`: devolve a tabela com as colocações de cada time
9. Get `/leaderboard/home`: devolve a tabela com as colocações cada time jogando em casa
10. Get `/leaderboard/away`: devolve a tabela com as colocações cada time jogando fora de casa

