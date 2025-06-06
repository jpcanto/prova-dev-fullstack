import { MediaRepository } from '@modules/media/domain/repositories/Media.repository';

export interface Media {
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  mediaType: 'movie' | 'tv';
}

export interface MediaIn {
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  mediaType: 'movie' | 'tv';
}

export interface UpdateMediaIn {
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  mediaType: 'movie' | 'tv';
}

export interface MediaModuleDependenciesIn {
  mediaRepository: MediaRepository;
}
