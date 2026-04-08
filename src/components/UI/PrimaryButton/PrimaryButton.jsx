import React from 'react';
import './PrimaryButton.scss';

const PrimaryButton = ({ children, href, className = '', ...props }) => {
  return (
    <a 
      href={href} 
      className={`btn btn-primary ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
