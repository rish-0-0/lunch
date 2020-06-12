import React from 'react';
import left from '../../images/left.svg';
import right from '../../images/right.svg';
import './style.css';

export default function ({width}) {
    return (
        <div className="logo">
            <img src={left} alt="left" id="left-arrow" width={width} />
            <img src={right} alt="right" id="right-arrow" width={width} />
        </div>
    );
}