import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Box,
  Avatar,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link as RouterLink } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn?: boolean;
  userImage?: string;
}

export default function Header({
  isLoggedIn = false,
  userImage = '',
}: HeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          width: '100%',
          maxWidth: '1000px',
          mx: 'auto',
          px: 2,
          boxSizing: 'border-box',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              textDecoration: 'none',
              mr: 4,
            }}
          >
            MMDB
          </Typography>

          <Box
            component="nav"
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Button component={RouterLink} to="/">
              Home
            </Button>

            <Button
              component={RouterLink}
              to="/genre"
              endIcon={<ArrowDropDownIcon />}
            >
              Genre
            </Button>
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            flexShrink: 0,
          }}
        >
          {/* Search */}
          <Box
            sx={{
              width: 190,
              height: 40,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              px: 1.5,
              boxSizing: 'border-box',
            }}
          >
            <SearchIcon
              sx={{
                fontSize: 20,
                color: 'text.primary',
                mr: 1,
              }}
            />

            <InputBase
              placeholder="Search"
              inputProps={{
                'aria-label': 'search',
              }}
              sx={{
                flex: 1,

                '& input::placeholder': {
                  color: 'text.secondary',
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* User / Authentication */}
          {isLoggedIn ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                src={userImage}
                alt="User Profile"
                sx={{
                  width: 36,
                  height: 36,
                }}
              />

              <KeyboardArrowDownIcon />
            </Box>
          ) : (
            <>
              <Button
                component={RouterLink}
                to="/signup"
                color="primary"
              >
                Sign up
              </Button>

              <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}