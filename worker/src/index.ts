import "dotenv/config";
import axios from "axios";
import { TMDBClient } from "./tmdb-client";

interface MediaData {
  original_language: string;
  original_title?: string;
  name?: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  mediaType: 'movie' | 'tv';
}

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
    const popularMovies = await tmdbClient.fetchPopularMovies();
    console.log(`Busca de filmes populares concluída. ${popularMovies.results.length} resultados.`);
    for (const movie of popularMovies.results) {
      const mediaData: MediaData = {
        original_language: movie.original_language,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
        original_title: movie.original_title,
        mediaType: 'movie',
      };
      await axios.post(apiUrl, mediaData);
    }
    console.log("Filmes populares enviados para a API com sucesso.");

    console.log("Buscando séries populares do TMDB...");
    const popularTvShows = await tmdbClient.fetchPopularTvShows();
    console.log(`Busca de séries populares concluída. ${popularTvShows.results.length} resultados.`);
    for (const show of popularTvShows.results) {
      const mediaData: MediaData = {
        original_language: show.original_language,
        overview: show.overview,
        popularity: show.popularity,
        poster_path: show.poster_path,
        title: show.name,
        release_date: show.first_air_date,
        original_title: show.original_name,
        mediaType: 'tv',
      };
      await axios.post(apiUrl, mediaData);
    }
    console.log("Séries populares enviadas para a API com sucesso.");

    console.log("Buscando filmes mais bem avaliados do TMDB...");
    const topRatedMovies = await tmdbClient.fetchTopRatedMovies();
    console.log(`Busca de filmes mais bem avaliados concluída. ${topRatedMovies.results.length} resultados.`);
    for (const movie of topRatedMovies.results) {
      const mediaData: MediaData = {
        original_language: movie.original_language,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
        original_title: movie.original_title,
        mediaType: 'movie',
      };
      await axios.post(apiUrl, mediaData);
    }
    console.log("Filmes mais bem avaliados enviados para a API com sucesso.");

    console.log("Buscando séries mais bem avaliadas do TMDB...");
    const topRatedTvShows = await tmdbClient.fetchTopRatedTvShows();
    console.log(`Busca de séries mais bem avaliadas concluída. ${topRatedTvShows.results.length} resultados.`);
    for (const show of topRatedTvShows.results) {
      const mediaData: MediaData = {
        original_language: show.original_language,
        overview: show.overview,
        popularity: show.popularity,
        poster_path: show.poster_path,
        title: show.name,
        release_date: show.first_air_date,
        original_title: show.original_name,
        mediaType: 'tv',
      };
      await axios.post(apiUrl, mediaData);
    }
    console.log("Séries mais bem avaliadas enviadas para a API com sucesso.");

  } catch (error) {
    console.error("Erro durante a execução da Lambda:", error);
    throw error;
  }
}

if (require.main === module) {
  console.log("Executando handler localmente...");
  const testEvent = {};

  handler(testEvent)
    .then(() => console.log("Execução local concluída."))
    .catch((err) => console.error("Erro na execução local:", err));
}
