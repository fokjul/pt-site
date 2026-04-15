import React, { useEffect, useState } from 'react';
import websiteCopy from '../../data/websiteCopy.json';
import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton';
import './Booking.scss';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://assets.setmore.com/integration/book-now/live/v1/anywhere-book-now.js';
  script.id = 'anywhere_book_now_script';

  script.onload = () => {
    // Simulate DOMContentLoaded AFTER script loads
    document.dispatchEvent(new Event('DOMContentLoaded'));
  };

  document.body.appendChild(script);
}, []);
``

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(websiteCopy.forms.successMessage);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="booking">
      {/* Header */}
      <section className="booking-header">
        <h1>{websiteCopy.booking.title}</h1>
        <p>{websiteCopy.booking.subtitle}</p>
      </section>

      {/* Booking System */}
      <section className="booking-system">
        <h2>{websiteCopy.booking.bookingSystem.title}</h2>

        <div className="booking-embed">
          {/* OFFICIAL SETMORE BUTTON */}
          <button
            id="Anywhere_button_iframe"
            className="anywhere-book-now-button"
            style={{
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              padding: '12px 18px',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: '6px',
              cursor: 'pointer'
            }}
            data-booking-url="https://yuliia-fok-pt.setmore.com"
            data-new-tab="true"
          >
            Book now
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>{websiteCopy.booking.contactForm.title}</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              {websiteCopy.booking.contactForm.nameLabel}{' '}
              {websiteCopy.forms.required}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              {websiteCopy.booking.contactForm.emailLabel}{' '}
              {websiteCopy.forms.required}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              {websiteCopy.booking.contactForm.messageLabel}{' '}
              {websiteCopy.forms.required}
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder={
                websiteCopy.booking.contactForm.messagePlaceholder
              }
              required
            />
          </div>

          <PrimaryButton type="submit">
            {websiteCopy.booking.contactForm.button}
          </PrimaryButton>
        </form>
      </section>

      {/* Location Info */}
      <section className="location-info">
        <h2>{websiteCopy.booking.location.title}</h2>
        <p>
          <strong>{websiteCopy.booking.location.venue}</strong>
        </p>
        <p>{websiteCopy.booking.location.address}</p>
        <p>{websiteCopy.booking.location.city}</p>
        <p>{websiteCopy.booking.location.note}</p>
      </section>
    </div>
  );
};

export default Booking;