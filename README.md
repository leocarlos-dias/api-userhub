# Employee Manager

Aqui você pode listar, cadastrar, atualizar e até desativar um usuários do seu sistema.

## Tecnologias utilizadas

*  Typescript
*  NodeJS
*  Postgres
*  Zod
*  JWT


## Endpoints do serviço

| Método | Endpoint | Responsabilidade |
|--------|----------|------------------|
| POST | /users | Cadastrar usuário |
| POST | /login | Autenticar usuário |
| GET | /users | Listar usuários cadastrados |
| GET | /users/profile | Listar usuário autenticado |
| PATCH | /users/:id | Atualizar um usuário |
| DELETE | /users/:id | Desativar um usuário |
| PUT | /users/:id/recover | Ativar um usuário |

## **Tabela**

* **Nome da tabela**: users
* **Colunas da tabela**:
  * **id**: inteiro, auto incrementável e chave primária.
  * **name**: string, tamanho máximo 20 e chave obrigatória.
  * **email**: string, tamanho máximo 100, único e chave obrigatória.
  * **password**: string, tamanho máximo 120 e chave obrigatória.
  * **admin**: boolean, valor padrão falso e não obrigatória.
  * **active**: boolean, valor padrão verdadeiro.


### **POST: /users**

* Cria uma conta:
  * **name**: string.
  * **email**: string.
  * **password**: string.
  * **admin**: boolean.

### **POST: /login**

* Se autentica:
  * **email**: string.
  * **password**: string.


### **GET: /users**

* Lista todos os usuário.

### **GET: /users/profile**

* Verifica o usuário autenticado.

### **PATCH: /users/:id**

* Atualiza um usuário:
  * **name**: string e opcional.
  * **email**: string e opcional.
  * **password**: string e opcional.


### **DELETE: /users/:id**

* Desativa um usuário.

### **PUT: /users/:id/recover**

* Ativa um usuário.


## **Regras de negócios**

* Um usuário comum:
    * **Se autenticar**
    * **Verificar autenticação**
    * **Se autalizar**
    * **Se desativar**
* Um usuário administrador:
    * **Se autenticar**
    * **Listar os usuários**
    * **Verificar autenticação**
    * **Atualizaar um usuário**
    * **Desativar um usuário**