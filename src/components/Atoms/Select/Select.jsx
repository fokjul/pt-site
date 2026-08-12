import React from 'react';
import './Select.scss';

const Select = ({ 
  label, 
  placeholder = '', 
  value = '', 
  onChange, 
  disabled = false,
  required = false,
  name = '',
  options = [],
  className = ''
}) => {
  return (
    <div className={`select-wrapper ${className}`}>
      {label && <label className="select-wrapper__label">{label}</label>}
      <select
        name={name}
        className="select-wrapper__select"
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
