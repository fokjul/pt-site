import React from 'react';
import websiteCopy from '../../../data/websiteCopy.json';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{websiteCopy.footer.brand}</h3>
          <p>{websiteCopy.footer.description}</p>
        </div>
        
        <div className="footer-section">
          <h3>{websiteCopy.footer.location.title}</h3>
          <p>{websiteCopy.footer.location.venue}</p>
          <p>{websiteCopy.footer.location.address}</p>
          <p>{websiteCopy.footer.location.city}</p>
        </div>
        
        <div className="footer-section">
          <h3>{websiteCopy.footer.quickLinks.title}</h3>
          <ul>
            {websiteCopy.footer.quickLinks.links.map((link, index) => {
              const path = index === 0 ? '/' : `/${link.toLowerCase().replace(' & pricing', '').replace(' & contact', '').replace(' ', '')}`;
              return (
                <li key={index}>
                  <a href={path}>{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>{websiteCopy.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
