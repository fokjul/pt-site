import React from 'react';
import IconChip from '../../Atoms/IconChip/IconChip';
import { siteContent } from '../../../data/siteContent';
import './Footer.scss';

const Footer = () => {
  const { brand, quickLinks, socialLinks, copyright } = siteContent.footer;

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-mark">{brand.mark}</div>
              <div className="footer__logo-wordmark">{brand.wordmark}</div>
            </div>
            <p className="footer__tagline">{brand.tagline}</p>
          </div>
          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__link-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__social">
            <h4 className="footer__heading">Follow Us</h4>
            <div className="footer__social-links">
              {socialLinks.map((social, index) => (
                <div key={index} href={social.href} className="footer__social-link">
                  <IconChip icon={social.icon} className="icon-chip-red" href={social.href} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__copyright">
          {copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
