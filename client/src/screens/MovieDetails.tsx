import {
  Alert,
  CircularProgress,
  Stack,
} from '@mui/material';

import { useParams } from 'react-router-dom';

import { useMovie } from '../hooks/useMovies';

const MovieDetails = () => {
  const { id } = useParams();

  const movieId = Number(id);

  const {
    movie,
    loading,
    error,
  } = useMovie(movieId);

  if (loading) {
    return (
      <Stack
        sx={{
            alignItems: 'center',
            justifyContent: 'center',
            py: 8,
        }}
        >
        <CircularProgress />
        </Stack>
    );
  }

  if (error) {
    return (
      <Alert severity="error">
        {error}
      </Alert>
    );
  }

  if (!movie) {
    return null;
  }

  return null;
};

export default MovieDetails;