import React from 'react';
import servicesData from '../../data/services.json';
import websiteCopy from '../../data/websiteCopy.json';
import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/UI/SecondaryButton/SecondaryButton';
import './Services.scss';

const Services = () => {
  return (
    <div className="services">
      <section className="services-header">
        <h1>{websiteCopy.services.title}</h1>
        <p>{websiteCopy.services.subtitle}</p>
        <p>{websiteCopy.services.description}</p>
      </section>
      
      <section className="services-list">
        {servicesData.services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-details">
              <span className="duration">Duration: {service.duration}</span>
              <span className="price">Price: ${service.price}</span>
            </div>
          </div>
        ))}
      </section>
      
      <section className="what-to-expect">
        <h2>{websiteCopy.services.whatToExpect.title}</h2>
        <ul>
          {websiteCopy.services.whatToExpect.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>
      
      <section className="cta">
        <h2>{websiteCopy.services.cta.title}</h2>
        <PrimaryButton href="/booking">
          {websiteCopy.services.cta.button}
        </PrimaryButton>
      </section>
    </div>
  );
};

export default Services;
