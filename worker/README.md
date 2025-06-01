# TMDB Worker

Este worker Node.js em TypeScript realiza requisições periódicas à API do TMDB para buscar a lista de filmes.

## Como funciona
- Autentica na API do TMDB usando uma chave de API.
- Faz requisições periódicas para obter a lista de filmes.
- A periodicidade é configurável via arquivo `constants.ts`.

## Configuração
1. Copie o arquivo `.env.example` para `.env` e preencha sua chave da API do TMDB:
   ```env
   TMDB_API_KEY=your_tmdb_api_key_here
   ```

2. Instale as dependências:
   ```sh
   pnpm install
   ```

## Execução
- Em desenvolvimento:
  ```sh
  pnpm run dev
  ```

## Estrutura
- `src/constants.ts`: Define a periodicidade das requisições.
- `src/tmdb-client.ts`: Classe responsável pela autenticação e requisições à API do TMDB.
- `src/movie-fetcher.ts`: Classe que gerencia a rotina periódica de busca de filmes.
- `src/index.ts`: Ponto de entrada da aplicação.