# UserHub

### Sobre

Este é um serviço web (API) consiste em um serviço de gerenciamento de usuários que permite listar, cadastrar, atualizar e desativar usuários em um sistema. Este serviço é implementado usando as tecnologias TypeScript, NodeJS, Postgres, Zod e JWT.


### Tecnologias Utilizadas

Abaixo estão listadas as principais tecnologias utilizadas neste projeto:

- **Node.js** com **TypeScript** como linguagem de programação e ambiente de execução;
- **Express** como framework para desenvolvimento de aplicações web em Node.js;
- **Postgres** como banco de dados relacional em ambiente de produção;
- **JWT** (JSON Web Tokens) para autenticação e autorização de rotas;
- **zod** para validação de dados nas rotas da API.

### Instalação

Para instalar as dependências necessárias, execute o seguinte comando:

```bash
npm install
# ou
yarn
```

### Configuração

Para configurar a aplicação, crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

```bash
PGHOST=DB
PGUSER=DB
PGDATABASE=DB
PGPASSWORD=DB
PGPORT=DB

PORT=SERVER
SECRET_KEY=JWT
```

Para criar a tabela:

```bash
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	"password" VARCHAR(120) NOT NULL,
	"admin" boolean DEFAULT FALSE,
	active boolean DEFAULT TRUE
);
```

### Execução

Para iniciar a aplicação, execute o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

### Documentação

#### Endpoints do serviço

| Método | Endpoint | Responsabilidade |
|--------|----------|------------------|
| POST | /users | Cadastrar usuário |
| POST | /login | Autenticar usuário |
| GET | /users | Listar usuários cadastrados |
| GET | /users/profile | Listar usuário autenticado |
| PATCH | /users/:id | Atualizar um usuário |
| DELETE | /users/:id | Desativar um usuário |
| PUT | /users/:id/recover | Ativar um usuário |

#### **Tabela**

* **Nome da tabela**: users
* **Colunas da tabela**:
  * **id**: inteiro, auto incrementável e chave primária.
  * **name**: string, tamanho máximo 20 e chave obrigatória.
  * **email**: string, tamanho máximo 100, único e chave obrigatória.
  * **password**: string, tamanho máximo 120 e chave obrigatória.
  * **admin**: boolean, valor padrão falso e não obrigatória.
  * **active**: boolean, valor padrão verdadeiro.


#### **POST: /users**

* Cria uma conta:
  * **name**: string.
  * **email**: string.
  * **password**: string.
  * **admin**: boolean.

#### **POST: /login**

* Se autentica:
  * **email**: string.
  * **password**: string.

#### **GET: /users**

* Lista todos os usuário.

#### **GET: /users/profile**

* Verifica o usuário autenticado.

#### **PATCH: /users/:id**

* Atualiza um usuário:
  * **name**: string e opcional.
  * **email**: string e opcional.
  * **password**: string e opcional.


#### **DELETE: /users/:id**

* Desativa um usuário.

#### **PUT: /users/:id/recover**

* Ativa um usuário.

#### Este serviço possui algumas regras de negócios que precisam ser respeitadas:

Usuários comuns só podem se autenticar, verificar a própria autenticação, atualizar suas informações e desativar a própria conta.
Usuários com permissão de administrador podem listar todos os usuários cadastrados, verificar a própria autenticação, atualizar as informações de qualquer usuário e desativar qualquer usuário.
