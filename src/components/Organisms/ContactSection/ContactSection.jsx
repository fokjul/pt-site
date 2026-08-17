import React, { useState } from 'react';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';
import Textarea from '../../Atoms/Textarea/Textarea';
import Select from '../../Atoms/Select/Select';
import ContactInfoRow from '../../Molecules/ContactInfoRow/ContactInfoRow';
import { siteContent } from '../../../data/siteContent';
import './ContactSection.scss';

const ContactSection = () => {
  const { heading, subcopy, contactInfo, form } = siteContent.contact;
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__container">
        <div className="contact-section__header">
          <h2 className="contact-section__heading">{heading}</h2>
          <p className="contact-section__subcopy">{subcopy}</p>
        </div>
        <div className="contact-section__layout">
          <div className="contact-section__info">
            <h3 className="contact-section__info-heading">{form.heading}</h3>
            <div className="contact-section__info-rows">
              {contactInfo.map((info, index) => (
                <ContactInfoRow
                  key={index}
                  label={info.label}
                  value={info.value}
                  icon={<circle cx="12" cy="12" r="10" />}
                />
              ))}
            </div>
            <div className="contact-section__map">
              <div className="contact-section__map-placeholder">
                Map Placeholder
              </div>
            </div>
          </div>
          <form className="contact-section__form" onSubmit={handleSubmit}>
            {form.fields.map((field, index) => {
              if (field.type === 'textarea') {
                return (
                  <Textarea
                    key={index}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required={field.required}
                  />
                );
              }
              if (field.type === 'select') {
                return (
                  <Select
                    key={index}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                    options={field.options}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required={field.required}
                  />
                );
              }
              return (
                <Input
                  key={index}
                  label={field.label}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                />
              );
            })}
            <Button variant="primary" fullWidth type="submit">
              {form.submitButton.label}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
