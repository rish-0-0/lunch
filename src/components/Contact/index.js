import React from 'react';
import Form from './Form';

export default function (props) {
  return (
    <section className="contact">
      <main className="contact-flex-container">
        <Form />
      </main>
      <h3 className="contact-request">I'll respond, I promise.</h3>
      <h6 className="contact-funny">It's automated</h6>
    </section>
  );
}