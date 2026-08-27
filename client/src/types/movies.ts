export type SortOrder = 'ASC' | 'DESC';

export interface Movie {
  id: number;
  uuid: string;
  title: string;
  releaseYear: number;
  posterUrl: string;
  rating: number;
}

export interface MovieDetails extends Movie {
  runtimeMinutes: number | null;
  overview: string | null;
  trailerUrl: string | null;
  language: string | null;
}

export interface MoviesResponse {
  data: Movie[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}