import ContactInfoRow from '../../Molecules/ContactInfoRow/ContactInfoRow';
import { siteContent } from '../../../data/siteContent';
import './ContactSection.scss';

const ContactSection = () => {
  const { heading, subcopy, contactInfo, form } = siteContent.contact;

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
                  icon={info.icon}
                />
              ))}
            </div>
            <div className="contact-section__map">
              <div className="contact-section__map-placeholder">
                Map Placeholder
              </div>
            </div>
          </div>
          <div className="contact-section__form contact-section__form--iframe">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScbuKZFp7UMYHRaejq9xJCaOCrocWk3rBf7woR-JGZTDixeIA/viewform?embedded=true"
              width="100%"
              height="1239"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
