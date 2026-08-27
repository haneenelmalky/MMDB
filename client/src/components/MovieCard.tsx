import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';

import StarRateIcon from '@mui/icons-material/StarRate';

import { Link as RouterLink } from 'react-router-dom';

import type { Movie } from '../types/movies';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({
  movie,
}: MovieCardProps) => {
  return (
    <Card
      component={RouterLink}
      to={`/movies/${movie.id}`}
      sx={{
        height: '100%',
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: 1,
        textDecoration: 'none',
        cursor: 'pointer',
        transition:
          'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',

        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3,
        },
      }}
    >
      <CardMedia
        component="img"
        image={
          movie.posterUrl ||
          '/placeholder-poster.png'
        }
        alt={movie.title}
        sx={{
          width: '100%',
          aspectRatio: '32 / 43',
          objectFit: 'cover',
          borderRadius: 1,
        }}
      />

      <CardContent
        sx={{
          p: 0,
          pt: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            mb: 0.5,
          }}
        >
          <StarRateIcon
            sx={{
              color: 'warning.main',
              fontSize: 20,
            }}
          />

          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            {movie.rating?.toFixed(1) ?? '0.0'}
          </Typography>
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            lineHeight: 1.2,
            mb: 0.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {movie.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {movie.releaseYear}
        </Typography>
      </CardContent>
    </Card>
  );
};