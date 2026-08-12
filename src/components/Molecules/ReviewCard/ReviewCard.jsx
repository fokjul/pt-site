import React from 'react';
import StarRating from '../../Atoms/StarRating/StarRating';
import './ReviewCard.scss';

const ReviewCard = ({ name, role, quote, rating = 5, className = '' }) => {
  return (
    <div className={`review-card ${className}`}>
      <StarRating rating={rating} className="review-card__rating" />
      <p className="review-card__quote">"{quote}"</p>
      <div className="review-card__author">
        <div className="review-card__name">{name}</div>
        <div className="review-card__role">{role}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
