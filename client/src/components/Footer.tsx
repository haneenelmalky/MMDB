import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        minHeight: 214,
        px: 2,
        py: 5,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        background:
          'linear-gradient(272.5deg, #003055 0%, #034A81 100.67%)',
      }}
    >
      {/* Logo */}
      <Typography
        component={RouterLink}
        to="/"
        sx={{
          color: 'primary.main',
          fontSize: 24,
          fontWeight: 800,
          lineHeight: 1,
          textDecoration: 'none',
          mb: 3,
        }}
      >
        MMDB
      </Typography>

      {/* Navigation Links */}
      <Box
        component="nav"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          mb: 3,
        }}
      >
        <Link
          component={RouterLink}
          to="/about"
          color="inherit"
        >
          About
        </Link>

        <Link
          component={RouterLink}
          to="/terms"
          color="inherit"
        >
          Terms of Use
        </Link>

        <Link
          component={RouterLink}
          to="/privacy"
          color="inherit"
        >
          Privacy Policy
        </Link>

        <Link
          component={RouterLink}
          to="/help"
          color="inherit"
        >
          Help
        </Link>
      </Box>

      {/* Copyright */}
      <Typography
        variant="caption"
        sx={{
          color: '#FFFFFF',
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} MMDB. All rights reserved.
      </Typography>
    </Box>
  );
}