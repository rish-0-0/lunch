import React from 'react';
import Button from '../Button';

export default function (props) {
  return (
    <form className="contact-form">
      {/* <h2 className="form-heading">Contact Me</h2> */}
      <div className="form-group">
        <input type="text" placeholder="Email" />
      </div>
      <div className="form-group">
        <Button onClick={(e) => {
          e.preventDefault();
        }}>Submit</Button>
      </div>
    </form>
  );
}