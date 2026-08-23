import { Button, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  isLoggedIn?: boolean;
  userImage?: string;
}

export default function Header({ isLoggedIn = false, userImage = '' }: HeaderProps) {
  return (
    <header className="header-appbar">
      <div className="header-toolbar">
        {/* Left Side */}
        <div className="header-left">
          <RouterLink to="/" className="header-logo">
            MMDB
          </RouterLink>

          <nav className="header-nav">
            <Button component={RouterLink} to="/" className="nav-link-home">
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/genre"
              endIcon={<ArrowDropDownIcon sx={{ color: '#555' }} />}
              className="nav-link-genre"
            >
              Genre
            </Button>
          </nav>
        </div>

        {/* Right Side */}
        <div className="header-right">
          <div className="header-search">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" aria-label="search" />
          </div>

          {isLoggedIn ? (
            <div className="user-profile">
              <Avatar src={userImage} alt="User Profile" sx={{ width: 36, height: 36 }} />
              <KeyboardArrowDownIcon sx={{ color: '#333' }} />
            </div>
          ) : (
            <div className="auth-buttons">
              <Button component={RouterLink} to="/signup" className="btn-signup">
                Sign up
              </Button>
              <Button component={RouterLink} to="/login" variant="contained" className="btn-login">
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}