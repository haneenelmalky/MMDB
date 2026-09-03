import type { Movie } from './movies';

export interface MoviesMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface MoviesResponse {
  data: Movie[];
  meta: MoviesMeta;
}