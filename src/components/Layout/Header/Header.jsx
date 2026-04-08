import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import websiteCopy from '../../../data/websiteCopy.json';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            {websiteCopy.brand.name}
          </Link>
        </div>
        
        <div>
           <div className="nav-actions">
          <button 
            className="hamburger-menu" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
              {websiteCopy.navigation.home}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
              {websiteCopy.navigation.about}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>
              {websiteCopy.navigation.services}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className={`nav-link ${isActive('/booking')}`} onClick={closeMenu}>
              {websiteCopy.navigation.booking}
            </Link>
          </li>
        </ul>
        </div>
       
      </nav>
    </header>
  );
};

export default Header;
