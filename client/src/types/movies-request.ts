import type { SortOrder } from './movies';

export interface UseMoviesParams {
  page: number;
  limit: number;
  sortOrder: SortOrder;
}