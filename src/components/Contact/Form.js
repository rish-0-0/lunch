import React from 'react';

export default function (props) {
  return (
    <form className="contact-form">
      <h2 className="form-heading">Contact Me</h2>
      <div className="form-group">
        <input type="text" placeholder="Email" />
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
}