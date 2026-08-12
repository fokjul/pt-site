import React from 'react';
import IconChip from '../../Atoms/IconChip/IconChip';
import './FeatureCard.scss';

const FeatureCard = ({ title, description, icon, className = '' }) => {
  return (
    <div className={`feature-card ${className}`}>
      <IconChip icon={icon} className="feature-card__icon" />
      <div className="feature-card__content">
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
