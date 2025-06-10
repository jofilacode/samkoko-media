import '../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <h2>SAMKOKO MEDIA INITIATIVE</h2>
          <p>Building A Wealthy Society</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>No 2. Fatesin Street by Leha Road,<br /> Off City College, Mararaba, Nasarawa State</p>
          <p>Email: samkokomediainitiative@gmail.com</p>
          <p>Phone: +2348051709865</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SAMKOKO MEDIA INITIATIVE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;