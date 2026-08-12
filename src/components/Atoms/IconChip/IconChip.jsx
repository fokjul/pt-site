import React from 'react';
import './IconChip.scss';

const IconChip = ({ icon, className = '' }) => {
  return (
    <div className={`icon-chip ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {icon}
      </svg>
    </div>
  );
};

export default IconChip;
