import axios, { AxiosInstance } from 'axios';

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  [key: string]: any;
}

interface TMDBMovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export class TMDBClient {
  private readonly apiKey: string;
  private readonly http: AxiosInstance;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.http = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      timeout: 10000,
      params: {
        api_key: this.apiKey,
        language: 'pt-BR',
      },
    });
  }

  public async fetchPopularMovies(page: number = 1): Promise<TMDBMovieListResponse> {
    const response = await this.http.get<TMDBMovieListResponse>('/movie/popular', {
      params: { page },
    });
    return response.data;
  }
} 