import React from 'react';
import './SecondaryButton.scss';

const SecondaryButton = ({ children, href, className = '', ...props }) => {
  return (
    <a 
      href={href} 
      className={`btn btn-secondary ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default SecondaryButton;
