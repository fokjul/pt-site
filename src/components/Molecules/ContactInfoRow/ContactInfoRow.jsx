import React from 'react';
import IconChip from '../../Atoms/IconChip/IconChip';
import './ContactInfoRow.scss';

const ContactInfoRow = ({ label, value, icon, className = '' }) => {
  return (
    <div className={`contact-info-row ${className}`}>
      <IconChip icon={icon} className="contact-info-row__icon" />
      <div className="contact-info-row__content">
        <div className="contact-info-row__label">{label}</div>
        <div className="contact-info-row__value">{value}</div>
      </div>
    </div>
  );
};

export default ContactInfoRow;
