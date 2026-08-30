import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Box,
  Avatar,
  Container,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

interface HeaderProps {
  isLoggedIn?: boolean;
  userImage?: string;
}

const GENRES = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance'];

export default function Header({
  isLoggedIn = false,
  userImage = '',
}: HeaderProps) {
  const navigate = useNavigate();

  const handleSelectGenre = (genre: string) => {
    navigate(`/genre/${genre.toLowerCase()}`);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', gap: 2 }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              component={RouterLink}
              to="/"
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                textDecoration: 'none',
                mr: { xs: 1, sm: 2, md: 4 },
              }}
            >
              MMDB
            </Typography>

            <Box component="nav" sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                component={RouterLink}
                to="/"
                sx={{ color: 'text.primary', px: { xs: 1, sm: 1.5 } }}
              >
                Home
              </Button>
              
              <DropDownMenu
                label="Genre"
                items={GENRES}
                onSelect={handleSelectGenre}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: { xs: 0.5, sm: 1, md: 1.5 },
              minWidth: 0,
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', sm: 180, md: 227 },
                height: { xs: 40, sm: 44, md: 48 },
                maxWidth: 227,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 60,
                display: 'flex',
                alignItems: 'center',
                px: { xs: 1, sm: 1.5 },
              }}
            >
              <SearchIcon
                sx={{
                  fontSize: { xs: 18, sm: 20 },
                  color: 'text.primary',
                  mr: { xs: 0.5, sm: 1 },
                }}
              />

              <InputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                sx={{
                  flex: 1,
                  '& input::placeholder': {
                    color: 'text.secondary',
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {isLoggedIn ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={userImage}
                  alt="User Profile"
                  sx={{
                    width: { xs: 32, sm: 36 },
                    height: { xs: 32, sm: 36 },
                  }}
                />
                <KeyboardArrowDownIcon
                  sx={{ fontSize: { xs: 20, sm: 24 } }}
                />
              </Box>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to="/signup"
                  color="primary"
                  sx={{
                    px: { xs: 1, sm: 2 },
                    minWidth: { xs: 'auto', sm: 64 },
                  }}
                >
                  Sign up
                </Button>

                <Button
                  component={RouterLink}
                  to="/login"
                  variant="contained"
                  color="primary"
                  sx={{
                    minWidth: { xs: 72, sm: 92 },
                    px: { xs: 1.5, sm: 2 },
                  }}
                >
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}