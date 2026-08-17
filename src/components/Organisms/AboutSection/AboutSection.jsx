import React from 'react';
import StatCard from '../../Molecules/StatCard/StatCard';
import { siteContent } from '../../../data/siteContent';
import './AboutSection.scss';

const AboutSection = ({ variant = 'A', id }) => {
  const content = variant === 'A' ? siteContent.about.variantA : siteContent.about.variantB;
  const { statBadge, bodyCopy, stats } = siteContent.about;
  const isImageLeft = variant === 'A';

  return (
    <section className="about-section" id={id}>
      <div className="about-section__container">
        <div className={`about-section__layout ${isImageLeft ? 'about-section__layout--image-left' : 'about-section__layout--image-right'}`}>
          <div className="about-section__image-wrapper">
            <div className="about-section__image">
              <div className="about-section__stat-badge">
                <div className="about-section__stat-number">{statBadge.number}</div>
                <div className="about-section__stat-label">{statBadge.label}</div>
              </div>
            </div>
          </div>
          <div className="about-section__content">
            <h2 className="about-section__heading">{content.heading}</h2>
            <div className="about-section__body">
              {bodyCopy.map((paragraph, index) => (
                <p key={index} className="about-section__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="about-section__stats">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  icon={<circle cx="12" cy="12" r="10" />}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
