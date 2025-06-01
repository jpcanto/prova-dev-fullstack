import axios, { AxiosInstance } from "axios";

export interface Media {
  id: string;
  name: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export class MediaGateway {
  private readonly http: AxiosInstance;

  constructor() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(apiUrl);

    if (!apiUrl) {
      console.error("Variável de ambiente NEXT_PUBLIC_API_URL não definida.");
    }

    this.http = axios.create({
      baseURL: apiUrl,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async fetchAllMedia(): Promise<Media[]> {
    try {
      const response = await this.http.get<Media[]>("/media");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar todas as mídias:", error);
      throw error;
    }
  }

  public async fetchMediaById(id: string): Promise<Media | null> {
    try {
      const response = await this.http.get<Media>(`/media/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        console.warn(`Mídia com ID ${id} não encontrada.`);
        return null;
      }
      console.error(`Erro ao buscar mídia com ID ${id}:`, error);
      throw error;
    }
  }

  public async createMedia(data: Partial<Media>): Promise<Media> {
    try {
      const response = await this.http.post<Media>("/media", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar mídia:", error);
      throw error;
    }
  }

  public async updateMedia(id: string, data: Partial<Media>): Promise<Media> {
    try {
      const response = await this.http.put<Media>(`/media/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar mídia com ID ${id}:`, error);
      throw error;
    }
  }

  public async deleteMedia(id: string): Promise<void> {
    try {
      await this.http.delete(`/media/${id}`);
    } catch (error) {
      console.error(`Erro ao deletar mídia com ID ${id}:`, error);
      throw error;
    }
  }
}
