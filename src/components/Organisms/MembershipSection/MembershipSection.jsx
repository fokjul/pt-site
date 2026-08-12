import React from 'react';
import PricingCard from '../../Molecules/PricingCard/PricingCard';
import { siteContent } from '../../../data/siteContent';
import './MembershipSection.scss';

const MembershipSection = () => {
  const { heading, subcopy, plans } = siteContent.membership;

  return (
    <section className="membership-section" id="membership">
      <div className="membership-section__container">
        <div className="membership-section__header">
          <h2 className="membership-section__heading">{heading}</h2>
          <p className="membership-section__subcopy">{subcopy}</p>
        </div>
        <div className="membership-section__plans">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              featured={plan.featured}
              featuredLabel={plan.featuredLabel}
              discountText={plan.discountText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
