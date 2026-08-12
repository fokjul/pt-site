import React from 'react';
import './Button.scss';

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  disabled = false, 
  onClick, 
  href,
  type = 'button',
  className = ''
}) => {
  const classes = [
    'button',
    `button--${variant}`,
    fullWidth && 'button--full-width',
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
