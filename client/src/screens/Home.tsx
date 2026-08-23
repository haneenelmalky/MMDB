import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 5, minHeight: '70vh' }}>
      <Typography variant="h4" component="h1" sx={{ color: '#222', fontWeight: 'bold', mb: 2 }}>
        All Movies
      </Typography>
      <Typography variant="body1" sx={{ color: '#666' }}>
        Homepage content will be placed here in Story #2.
      </Typography>
    </Container>
  );
}