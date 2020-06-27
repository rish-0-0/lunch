import React from 'react';
import './style.css';

export default function ({ children, ...rest }) {
  return (
    <button {...rest}>{children}</button>
  );
}