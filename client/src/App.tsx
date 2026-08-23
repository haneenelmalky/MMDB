import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976D2' },
    background: { default: '#F8F9FA' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#F8F9FA',
          }}
        >
          <Header isLoggedIn={false} />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Footer />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;