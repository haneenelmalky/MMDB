export type SortOrder = 'ASC' | 'DESC';

export interface Movie {
  id: number;
  uuid: string;
  title: string;
  releaseYear: number;
  posterUrl: string;
  rating: number;
}

export interface CastMember {
  id: number;
  actorName: string;
  characterName: string;
  actorImageUrl: string | null;
}

export interface MovieDetails extends Movie {
  runtimeMinutes: number | null;
  overview: string | null;
  trailerUrl: string | null;
  language: string | null;
  director: string | null;
  writer: string | null;
  genres: string[] | null;
  reviewsCount: number;
  cast?: CastMember[];
}