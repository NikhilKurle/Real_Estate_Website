import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Prime<span>Nest</span>
          </Link>
          <p className="text-muted">
            Redefining luxury real estate. We help you find the perfect home that matches your lifestyle and aspirations.
          </p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">IG</a>
            <a href="#">LI</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><MapPin size={18} /> 123 Luxury Avenue, Beverly Hills, CA 90210</li>
            <li><Phone size={18} /> +1 (800) 123-4567</li>
            <li><Mail size={18} /> info@primenest.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container flex justify-between items-center footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} PrimeNest. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
