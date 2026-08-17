import React from 'react';
import './IconChip.scss';

const IconChip = ({ icon, className = '' }) => {
  return (
    <div className={`icon-chip ${className}`}>
      <img src={icon} alt="" className="icon-chip__img" />
    </div>
  );
};

export default IconChip;