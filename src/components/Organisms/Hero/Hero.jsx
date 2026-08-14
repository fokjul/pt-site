import React from 'react';
import Button from '../../Atoms/Button/Button';
import FeatureCard from '../../Molecules/FeatureCard/FeatureCard';
import { siteContent } from '../../../data/siteContent';
import './Hero.scss';

const Hero = () => {
  const { heading, subcopy, ctaButton, features } = siteContent.hero;

  return (
    <section className="hero" id="home">
      <div className="hero__background"></div>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__heading">
            {heading.first}
            <br />
            <span className="hero__heading-accent">{heading.second}</span>
          </h1>
          <p className="hero__subcopy">{subcopy}</p>
          <Button variant="primary" href={ctaButton.href} className="hero__cta">
            {ctaButton.label}
          </Button>
        </div>
        <div className="hero__features">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="hero__feature"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
