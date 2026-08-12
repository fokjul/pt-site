import React from 'react';
import './Textarea.scss';

const Textarea = ({ 
  label, 
  placeholder = '', 
  value = '', 
  onChange, 
  disabled = false,
  required = false,
  name = '',
  rows = 4,
  className = ''
}) => {
  return (
    <div className={`textarea-wrapper ${className}`}>
      {label && <label className="textarea-wrapper__label">{label}</label>}
      <textarea
        name={name}
        className="textarea-wrapper__textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
