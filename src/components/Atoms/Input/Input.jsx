import React from 'react';
import './Input.scss';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder = '', 
  value = '', 
  onChange, 
  disabled = false,
  required = false,
  name = '',
  className = ''
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-wrapper__label">{label}</label>}
      <input
        type={type}
        name={name}
        className="input-wrapper__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
    </div>
  );
};

export default Input;
