# Challenge Flix API

## Requisitos

- Node.js (versão 20.x ou superior)
- Docker (para o banco de dados MongoDB)
- pnpm (gerenciador de pacotes, ou npm/yarn)

## Configuração

1.  **Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz da pasta `api` com as seguintes variáveis. Use a configuração abaixo com base no `docker-compose.yml`:
    ```env
    # Configurações do MongoDB
    MONGODB_USER=challenge_flix
    MONGODB_PASSWORD=challenge_flix123
    MONGODB_HOST=localhost:27017
    MONGODB_DATABASE=challenge_flix
    MONGODB_AUTH_SOURCE=admin

    # Porta da aplicação
    APP_PORT=3050

    # Origens permitidas para CORS (separadas por vírgula)
    CORS_ORIGINS=http://localhost:3000
    ```

2.  **Banco de Dados (MongoDB com Docker):**
    Certifique-se de ter o Docker instalado e rodando.
    Navegue até a pasta `local` e inicie os serviços Docker:
    ```sh
    cd ../local
    docker-compose up -d
    ```
    Isso iniciará o container do MongoDB.

## Como Rodar

1.  **Instalar Dependências:**
    Na raiz da pasta `api`, instale as dependências:
    ```sh
    pnpm install
    ```

2.  **Rodar em Modo Desenvolvimento:**
    Use `ts-node-dev` para rodar a aplicação com recarregamento automático:
    ```sh
    pnpm run dev
    ```
