import { useState } from 'react';
import type { MouseEvent } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';

import FilterListIcon from '@mui/icons-material/FilterList';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import type { Movie, SortOrder } from '../types/movies';

export const Home = () => {
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>('DESC');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const {
    movies,
    totalPages,
    loading,
    error,
    isEmpty,
    refetch,
  } = useMovies({
    page,
    limit: 8,
    sortOrder,
  });

  const handleSortClick = (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortClose = (order?: SortOrder) => {
    setAnchorEl(null);

    if (order) {
      setSortOrder(order);
      setPage(1);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        minHeight: '80vh',
      }}
    >
      {/* Page Header */}
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          All Movies
        </Typography>

        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={handleSortClick}
          sx={{
            width: 107,
            height: 40,
            minWidth: 107,
            borderRadius: '20px',
            color: 'text.darkerGray',
            px: 1.5,

            '& .MuiButton-startIcon': {
              margin: 0,
            },

            '& .MuiSvgIcon-root': {
              fontSize: 20,
            },
          }}
        >
          Sort by
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleSortClose()}
        >
          <MenuItem
            onClick={() => handleSortClose('DESC')}
          >
            Newest
          </MenuItem>

          <MenuItem
            onClick={() => handleSortClose('ASC')}
          >
            Oldest
          </MenuItem>
        </Menu>
      </Stack>

      {/* Loading State */}
      {loading && (
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            py: 8,
          }}
        >
          <CircularProgress />
        </Stack>
      )}

      {/* Error State */}
      {!loading && error && (
        <Alert
          severity="error"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={refetch}
            >
              Retry
            </Button>
          }
          sx={{
            my: 4,
          }}
        >
          {error}
        </Alert>
      )}

      {/* Empty State */}
      {!loading && isEmpty && (
        <Stack
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            py: 8,
          }}
        >
          <MovieFilterIcon
            color="disabled"
            sx={{
              fontSize: 60,
              mb: 1,
            }}
          />

          <Typography variant="h6">
            No movies found
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Check back later or try changing your filters.
          </Typography>
        </Stack>
      )}

      {/* Movies Grid */}
      {!loading && !error && !isEmpty && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {movies.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </Box>
      )}

      {/* Pagination */}
      {!loading &&
        !error &&
        !isEmpty &&
        totalPages > 0 && (
          <Stack
            sx={{
              alignItems: 'center',
              mt: 5,
            }}
          >
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              shape="rounded"
            />
          </Stack>
        )}
    </Container>
  );
};

export default Home;