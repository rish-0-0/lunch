import React from 'react';
import left from '../../images/left.svg';
import right from '../../images/right.svg';
import './style.css';

export default function ({width, children}) {
    return (
        <div className="logo">
            {children}
            <img src={left} alt="left" id="left-arrow" />
            <img src={right} alt="right" id="right-arrow" />
        </div>
    );
}