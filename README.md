# MongoDB API

Bem-vindo à API simples usando MongoDB, Express e Joi para validação.

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema. Além disso, você precisará de uma instância do MongoDB em execução localmente ou em algum serviço de hospedagem como o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Instalação

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/seu-usuario/mongodb-api.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd mongodb-api
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do seu projeto e configure as variáveis de ambiente necessárias. Você pode usar um arquivo `.env.example` como modelo.

2. Certifique-se de ter um servidor MongoDB em execução.

## Uso

1. **Inicie o servidor:**

    ```bash
    npm start
    ```

    O servidor será iniciado em `http://localhost:9898` por padrão.

2. **Teste a API:**

   - Endpoint de exemplo para criar um filme:

     ```http
     POST http://localhost:9898/save
     Content-Type: application/json

     {
       "name": "Nome do Filme",
       "description": "Descrição do Filme",
       "imageUrl": "https://example.com/imagem.jpg"
     }
     ```

   - Endpoint de exemplo para recuperar todos os filmes:

     ```http
     GET http://localhost:9898/
     ```

3. Personalize conforme necessário para atender aos requisitos específicos do seu projeto.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

## Documentação

A documentação da API está disponível em [http://localhost:9898/api-docs](http://localhost:9898/api-docs). Você pode usar o Swagger UI para explorar os endpoints, modelos de dados e testar as operações diretamente na interface.