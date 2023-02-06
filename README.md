# :construction: README customizado em construção ! :construction:

# Este é meu projeto Trybe Futebol Clube, desenvolvido na Trybe

## Alguns comentários

Eu sou parte do time de desenvolvimento do TFC, um site informativo sobre partidas e classificações de futebol. Nossa equipe foi responsável por desenvolver uma API utilizando o método TDD e integrar as aplicações através do docker-compose para que elas funcionem com um banco de dados.

Em este projeto, estou construindo um back-end dockerizado, utilizando modelagem de dados com o Sequelize. Estou desenvolvendo de acordo com as regras de negócio fornecidas e minha API deve ser consumida pelo front-end já disponível.

Para adicionar uma partida, é necessário ter um token, então a pessoa precisa estar logada para fazer alterações. Estamos criando um relacionamento entre as tabelas de times e partidas para atualizar as informações das partidas.

Meu back-end irá implementar regras de negócio para popular adequadamente a tabela disponível no front-end, que será exibida para o usuário do sistema.

## Como executar o projeto

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

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
