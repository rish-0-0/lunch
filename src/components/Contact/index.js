import React from 'react';
import Form from './Form';
import './style.css';

export default function (props) {
  return (
    <section className="contact">
      <main className="contact-flex-container">
        <Form />
      </main>
      <h3 className="contact-request">Contact Me</h3>
      <h6 className="contact-funny">I always respond.</h6>
    </section>
  );
}