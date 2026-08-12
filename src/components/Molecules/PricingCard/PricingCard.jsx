import React from 'react';
import Button from '../../Atoms/Button/Button';
import './PricingCard.scss';

const PricingCard = ({ 
  name, 
  price, 
  period, 
  featured = false, 
  featuredLabel = '', 
  discountText = '',
  className = '' 
}) => {
  return (
    <div className={`pricing-card ${featured ? 'pricing-card--featured' : ''} ${className}`}>
      {featured && featuredLabel && (
        <div className="pricing-card__ribbon">{featuredLabel}</div>
      )}
      <div className="pricing-card__content">
        <h3 className="pricing-card__name">{name}</h3>
        <div className="pricing-card__price">
          <span className="pricing-card__amount">{price}</span>
          <span className="pricing-card__period">{period}</span>
        </div>
        {discountText && (
          <div className="pricing-card__discount">
            <Button variant="primary" fullWidth>
              {discountText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
