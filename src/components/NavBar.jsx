import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          SAMKOKO MEDIA INITIATIVE
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" exact="true" className="nav-item" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/programs" className="nav-item" onClick={closeMenu}>
            Programs
          </NavLink>
           <NavLink to="/gallery" className="nav-item" onClick={closeMenu}>
            Gallery
          </NavLink>
          <NavLink to="/donate" className="nav-item" onClick={closeMenu}>
            Donate
          </NavLink>
          <NavLink to="/contact" className="nav-item" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>

        <div
          className={`nav-icon ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' ? toggleMenu() : null)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
