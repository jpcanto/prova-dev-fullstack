import "dotenv/config";
import axios from "axios";
import { TMDBClient } from "./tmdb-client";

export async function handler(event: any): Promise<void> {
  console.log("Lambda acionada. Evento:", event);

  const apiKey = process.env.TMDB_API_KEY;
  const apiUrl = `${process.env.API_URL}/media`;

  if (!apiKey) {
    console.error(
      "TMDB_API_KEY não definida nas variáveis de ambiente da Lambda."
    );
    return;
  }

  if (!apiUrl) {
    console.error("API_URL não definida nas variáveis de ambiente da Lambda.");
    return;
  }

  try {
    const tmdbClient = new TMDBClient(apiKey);
    console.log("Buscando filmes populares do TMDB...");
    const movies = await tmdbClient.fetchPopularMovies();
    console.log(`Busca do TMDB concluída.`);
    console.log(movies);

    for (const movie of movies.results) {
      await axios.post(apiUrl, movie);
    }
    console.log("Filmes enviados para a API com sucesso.");
  } catch (error) {
    console.error("Erro durante a execução da Lambda:", error);
    throw error;
  }
}

// Bloco para testar a função handler localmente
if (require.main === module) {
  console.log("Executando handler localmente...");
  const testEvent = {};

  handler(testEvent)
    .then(() => console.log("Execução local concluída."))
    .catch((err) => console.error("Erro na execução local:", err));
}
