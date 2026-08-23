import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#418CFB', 
      dark: '#034A81',
    },

    secondary: {
      main: '#1E88E5',
    },

    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#2B2B2B',
      secondary: '#9E9E9E',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default muiTheme;