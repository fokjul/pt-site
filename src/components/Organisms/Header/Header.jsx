import React, { useState } from 'react';
import Button from '../../Atoms/Button/Button';
import { siteContent } from '../../../data/siteContent';
import './Header.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logo, navLinks, ctaButton } = siteContent.header;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <div className="header__logo-mark">{logo.mark}</div>
          <div className="header__logo-wordmark">{logo.wordmark}</div>
        </div>
        
        <div className="header__right">
          <Button variant="primary" href={ctaButton.href} className="header__cta">
            {ctaButton.label}
          </Button>
          
          <nav className="header__nav">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          
          <button 
            className="header__hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`header__hamburger-line ${isMobileMenuOpen ? 'header__hamburger-line--open' : ''}`}></span>
            <span className={`header__hamburger-line ${isMobileMenuOpen ? 'header__hamburger-line--open' : ''}`}></span>
            <span className={`header__hamburger-line ${isMobileMenuOpen ? 'header__hamburger-line--open' : ''}`}></span>
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="header__mobile-menu">
          <nav className="header__mobile-nav">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="header__mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <Button variant="primary" href={ctaButton.href} className="header__mobile-cta">
              {ctaButton.label}
            </Button>
          </nav>
        </div>
      )}
      
      {isMobileMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;
