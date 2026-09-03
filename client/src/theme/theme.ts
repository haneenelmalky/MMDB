import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeText {
    darkerGray: string;
  }
}

const muiTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#418CFB',
      dark: '#034A81',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#1E88E5',
    },

    warning: {
      main: '#FFC107',
    },

    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#123B63',
      secondary: '#8A8A8A',
      darkerGray: '#697586',
    },

    divider: '#E5E5E5',
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '14px',
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#123B63',
          borderBottom: '1px solid #E5E5E5',
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '56px',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },

        contained: {
          borderRadius: '6px',
          boxShadow: 'none',

          '&:hover': {
            boxShadow: 'none',
          },
        },

        outlined: {
          borderColor: '#E5E5E5',
          color: '#123B63',

          '&:hover': {
            borderColor: '#418CFB',
            backgroundColor: 'transparent',
          },
        },
      },
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#FFFFFF',
            color: '#418CFB',
            border: '1px solid #418CFB',
            fontWeight: 700,
          },

          '&.Mui-selected:hover': {
            backgroundColor: '#FFFFFF',
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 500,

          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
      },
    },
  },
});

export default muiTheme;