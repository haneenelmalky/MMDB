import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Box,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

import muiTheme from './theme/theme';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './screens/Home';
import MovieDetails from './screens/MovieDetails';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <BrowserRouter>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />

          <Box
            component="main"
            sx={{
              flex: 1,
            }}
          >
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/movies/:uuid"
                element={<MovieDetails />}
              />
            </Routes>
          </Box>

          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
