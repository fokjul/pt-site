import React, { useState } from 'react';
import websiteCopy from '../../data/websiteCopy.json';
import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/UI/SecondaryButton/SecondaryButton';
import './Booking.scss';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    alert(websiteCopy.forms.successMessage);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="booking">
      <section className="booking-header">
        <h1>{websiteCopy.booking.title}</h1>
        <p>{websiteCopy.booking.subtitle}</p>
      </section>
      
      <section className="booking-system">
        <h2>{websiteCopy.booking.bookingSystem.title}</h2>
        <div className="booking-embed">
          {/* This will be replaced with actual Setmore.com embed code */}
          <div className="placeholder-booking">
            <p>{websiteCopy.booking.bookingSystem.placeholder}</p>
            <p>{websiteCopy.booking.bookingSystem.altText}</p>
          </div>
        </div>
      </section>
      
      <section className="contact-form-section">
        <h2>{websiteCopy.booking.contactForm.title}</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{websiteCopy.booking.contactForm.nameLabel} {websiteCopy.forms.required}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">{websiteCopy.booking.contactForm.emailLabel} {websiteCopy.forms.required}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">{websiteCopy.booking.contactForm.messageLabel} {websiteCopy.forms.required}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder={websiteCopy.booking.contactForm.messagePlaceholder}
            ></textarea>
          </div>
          
          <PrimaryButton type="submit" className="btn btn-primary">
            {websiteCopy.booking.contactForm.button}
          </PrimaryButton>
        </form>
      </section>
      
      <section className="location-info">
        <h2>{websiteCopy.booking.location.title}</h2>
        <p><strong>{websiteCopy.booking.location.venue}</strong></p>
        <p>{websiteCopy.booking.location.address}</p>
        <p>{websiteCopy.booking.location.city}</p>
        <p>{websiteCopy.booking.location.note}</p>
      </section>
    </div>
  );
};

export default Booking;
