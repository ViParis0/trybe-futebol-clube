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
<details>
<summary><strong>🐳 Configuração Docker</strong></summary><br />

  ### Docker e Docker-compose

  ⚠ O seu docker-compose precisa estar na versão 1.29 ou superior.  ⚠
[Veja aqui a documentação para atualizar o docker-compose.](https://docs.docker.com/compose/install/)

⚠️ **Crie os arquivos dockerfile:**

  - As pastas `frontend/` e `backend/` devem possuir um arquivo `Dockerfile` cada, configurados corretamente para a aplicação começar a rodar. Sem essa etapa concluída o _docker-compose_ não irá funcionar.

⚠️ **Atenção:**

- Seu projeto vai conter um arquivo `docker-compose.yml` que será utilizado pelo avaliador para realizar o _build_ da aplicação, você **não** deve alterá-lo ou excluí-lo.
- O arquivo `docker-compose.yml` também pode ser utilizado para executar a aplicação na sua máquina local, para isso é necessário executar o comando `npm run compose:up` na raiz do projeto.
- Recomendamos que enquanto desenvolve o projeto prefira o usar o comando `npm run compose:up:dev` pois, diferente do comando anterior, este comando está configurado para compartilhar volumes com o _docker_ e também utiliza o _script_ que realiza o _live-reload_ ao fazer modificações no _back-end_. Somente quando instalar uma nova dependência ou alterar algum arquivo na raiz do backend, você deverá realizar o re-build do seu compose, pois o volume está mapeando somente alterações dentro da pasta `src` Você pode verificar essas configurações explorando o arquivo `docker-compose.dev.yml` e comparar com `docker-compose.yml`


>  👀 **De olho na dica:**
> Lembre-se, você pode revisitar os conteúdos sobre Docker:
> - [Comandos básicos do Docker](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/a852c0dd-0602-4357-88e8-707352e97927/lesson/0ad2e27d-e6d6-459d-8f1b-ad8ddc7ca046)
> - [Criando nossa primeira imagem Docker](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/da25fd46-8818-4234-8603-a442b047370f/lesson/822be635-e9da-4b46-8042-cbf537013935)
> - [Criando nosso primeiro arquivo Compose](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/1ad977dd-5f74-4ff0-a2db-119b30242d32)
</details>

<details>




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
