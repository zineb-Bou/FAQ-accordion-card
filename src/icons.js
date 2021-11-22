import React from 'react';
import './style/style.css';
export function Arrow(props) {
  return (
    <div className="arrow-icon">
      <span
        className={`arrow-icon__left-bar ${props.isOpen ? 'open' : ''}`}
      ></span>
      <span
        className={`arrow-icon__right-bar ${props.isOpen ? 'open' : ''}`}
      ></span>
    </div>
  );
}
