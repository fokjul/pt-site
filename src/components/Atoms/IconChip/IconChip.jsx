import React from 'react';
import './IconChip.scss';

const IconChip = ({ icon, href, className = '' }) => {
  const chipClassName = `icon-chip ${className}`;
  const img = <img src={icon} alt="" className="icon-chip__img" />;

  if (!href) {
    return <div className={chipClassName}>{img}</div>;
  }

  return (
    <a href={href} className={chipClassName}>
      {img}
    </a>
  );
};

export default IconChip;
