import React from 'react';
import ReviewCard from '../../Molecules/ReviewCard/ReviewCard';
import { siteContent } from '../../../data/siteContent';
import './ReviewsSection.scss';

const ReviewsSection = () => {
  const { heading, subcopy, reviews } = siteContent.reviews;

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-section__container">
        <div className="reviews-section__header">
          <h2 className="reviews-section__heading">{heading}</h2>
          <p className="reviews-section__subcopy">{subcopy}</p>
        </div>
        <div className="reviews-section__grid">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              role={review.role}
              quote={review.quote}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
