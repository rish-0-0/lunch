import React from 'react';
import './style.css';

function Title ({ title }) {
  return (
    <div className="title">
      <h1 className="title-heading">{title}</h1>
    </div>
  );
}

export default Title;