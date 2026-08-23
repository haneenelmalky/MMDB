import { Link as RouterLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Logo */}
      <RouterLink to="/" className="footer-logo">
        MMDB
      </RouterLink>

      {/* Navigation Links */}
      <nav className="footer-nav">
        <RouterLink to="/about" className="footer-link">
          About
        </RouterLink>
        <RouterLink to="/terms" className="footer-link">
          Terms of Use
        </RouterLink>
        <RouterLink to="/privacy" className="footer-link">
          Privacy Policy
        </RouterLink>
        <RouterLink to="/help" className="footer-link">
          Help
        </RouterLink>
      </nav>

      {/* Copyright */}
      <p className="footer-copyright">
        © {new Date().getFullYear()} MMDB. All rights reserved.
      </p>
    </footer>
  );
}