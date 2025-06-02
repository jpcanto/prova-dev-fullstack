import axios, { AxiosInstance } from 'axios';

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  [key: string]: any;
}

interface TVShow {
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  poster_path: string | null;
  [key: string]: any;
}

interface TMDBListResponse<T> {
  page: number;
  results: T[];
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

  public async fetchPopularMovies(page: number = 1): Promise<TMDBListResponse<Movie>> {
    const response = await this.http.get<TMDBListResponse<Movie>>('/movie/popular', {
      params: { page },
    });
    return response.data;
  }

  public async fetchPopularTvShows(page: number = 1): Promise<TMDBListResponse<TVShow>> {
    const response = await this.http.get<TMDBListResponse<TVShow>>('/tv/popular', {
      params: { page },
    });
    return response.data;
  }

  public async fetchTopRatedMovies(page: number = 1): Promise<TMDBListResponse<Movie>> {
    const response = await this.http.get<TMDBListResponse<Movie>>('/movie/top_rated', {
      params: { page },
    });
    return response.data;
  }

  public async fetchTopRatedTvShows(page: number = 1): Promise<TMDBListResponse<TVShow>> {
    const response = await this.http.get<TMDBListResponse<TVShow>>('/tv/top_rated', {
      params: { page },
    });
    return response.data;
  }
} 