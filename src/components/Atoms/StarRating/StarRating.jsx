import React from 'react';
import './StarRating.scss';

const StarRating = ({ rating = 5, max = 5 }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: max }).map((_, index) => (
        <span 
          key={index} 
          className={`star-rating__star ${index < rating ? 'star-rating__star--filled' : 'star-rating__star--empty'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
