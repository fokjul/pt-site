import React from 'react';
import trainerData from '../../data/trainer.json';
import testimonialsData from '../../data/testimonials.json';
import websiteCopy from '../../data/websiteCopy.json';
import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/UI/SecondaryButton/SecondaryButton';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <section className="trainer-bio">
        <h1>{websiteCopy.about.title}</h1>
        <p>{trainerData.bio}</p>
        
        <div className="qualifications">
          <h2>{websiteCopy.about.qualifications.title}</h2>
          <ul>
            {trainerData.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
        
        <div className="philosophy">
          <h2>{websiteCopy.about.philosophy.title}</h2>
          <p>{trainerData.philosophy}</p>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>{websiteCopy.about.testimonials.title}</h2>
        <div className="testimonials-grid">
          {testimonialsData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {'\u2605'.repeat(testimonial.rating)}{'\u2606'.repeat(5 - testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
      
      <div className="about-actions">
        <PrimaryButton href="/booking">
          {websiteCopy.about.ctaButton}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default About;
