import React from 'react';
import downleft from '../../images/downleft.svg';
import downright from '../../images/downright.svg';
import './style.css';

export default function (props) {
  return (
    <section className="experience">
      <div className="reverse-logo-container">
        <img id="downleft" alt="downleft" src={downleft} />
        <img id="downright" alt="downright" src={downright} />
      </div>
    </section>
  );
}