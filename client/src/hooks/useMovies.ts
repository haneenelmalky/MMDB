import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import type {
  Movie,
  MovieDetails,
  MoviesResponse,
  SortOrder,
} from '../types/movies';

interface UseMoviesParams {
  page: number;
  limit: number;
  sortOrder: SortOrder;
}

export const useMovies = ({
  page,
  limit,
  sortOrder,
}: UseMoviesParams) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(0);

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

      setMovies(data.data);
      setTotalPages(data.meta.totalPages);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Something went wrong';

      setError(message);
      setMovies([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  }, [page, limit, sortOrder]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    movies,
    totalPages,
    loading,
    error,
    isEmpty: !loading && !error && movies.length === 0,
    refetch: fetchMovies,
  };
};

export const useMovie = (id: number) => {
  const [movie, setMovie] = useState<MovieDetails | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(
    null,
  );

  const fetchMovie = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/movies/${id}`,
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
  }, [id]);

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