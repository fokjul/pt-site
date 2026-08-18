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
            {/* <h3 className="contact-section__info-heading">{form.heading}</h3> */}
            <div className="contact-section__info-rows">
              {contactInfo.map((info, index) => (
                <ContactInfoRow
                  key={index}
                  label={info.label}
                  value={info.value}
                  icon={info.icon}
                />
              ))}
            </div>
            <div className="contact-section__map">
              <div className="contact-section__map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2079.1251831599625!2d-123.00053004193339!3d49.24898887790643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677573a64c8f5%3A0xd1a6e31b46907ba4!2sYuliia%20Fok%20Group%20%26%20Personal%20Training!5e0!3m2!1sen!2sca!4v1787024816334!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Gym location map"
                ></iframe>
              </div>
            </div>
          </div>
          {/* <form className="contact-section__form" onSubmit={handleSubmit}>
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
          </form> */}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScbuKZFp7UMYHRaejq9xJCaOCrocWk3rBf7woR-JGZTDixeIA/viewform?embedded=true" width="640" height="1239" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
