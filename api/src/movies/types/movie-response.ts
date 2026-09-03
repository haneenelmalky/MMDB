export interface MovieListItem {
  id: number;
  uuid: string;
  title: string;
  releaseYear: number;
  posterUrl: string;
  rating: number;
}

export interface MoviesMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface MoviesResponse {
  data: MovieListItem[];
  meta: MoviesMeta;
}