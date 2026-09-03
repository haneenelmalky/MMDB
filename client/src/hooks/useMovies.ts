import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import type { MovieDetails } from '../types/movies';

import type { MoviesResponse } from '../types/movies-response';

import type { UseMoviesParams } from '../types/movies-request';

export const useMovies = ({
  page,
  limit,
  sortOrder,
}: UseMoviesParams) => {
  const [moviesResponse, setMoviesResponse] =
    useState<MoviesResponse | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(
    null,
  );

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/movies?page=${page}&limit=${limit}&order=${sortOrder}`,
      );

      if (!response.ok) {
        throw new Error(
          'Failed to fetch movies. Please try again later.',
        );
      }

      const data: MoviesResponse = await response.json();

      setMoviesResponse(data);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Something went wrong';

      setError(message);
      setMoviesResponse(null);
    } finally {
      setLoading(false);
    }
  }, [page, limit, sortOrder]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const movies = moviesResponse?.data ?? [];
  const totalPages = moviesResponse?.meta.totalPages ?? 0;

  return {
    movies,
    totalPages,
    loading,
    error,
    isEmpty: !loading && !error && movies.length === 0,
    refetch: fetchMovies,
  };
};

export const useMovie = (uuid: string) => {
  const [movie, setMovie] = useState<MovieDetails | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(
    null,
  );

  const fetchMovie = useCallback(async () => {
    if (!uuid) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/movies/${uuid}`,
      );

      if (!response.ok) {
        throw new Error(
          'Failed to fetch movie. Please try again later.',
        );
      }

      const data: MovieDetails = await response.json();

      setMovie(data);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Something went wrong';

      setError(message);
      setMovie(null);
    } finally {
      setLoading(false);
    }
  }, [uuid]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return {
    movie,
    loading,
    error,
    refetch: fetchMovie,
  };
};