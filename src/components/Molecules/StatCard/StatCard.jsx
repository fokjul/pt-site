import React from 'react';
import IconChip from '../../Atoms/IconChip/IconChip';
import './StatCard.scss';

const StatCard = ({ number, label, icon, className = '' }) => {
  return (
    <div className={`stat-card ${className}`}>
      <IconChip icon={icon} className="stat-card__icon" />
      <div className="stat-card__number">{number}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
};

export default StatCard;
