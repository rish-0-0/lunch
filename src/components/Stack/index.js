import React from 'react';
import react_black from '../../images/react_black.svg';
import node_black from '../../images/black_node.svg';
import './style.css';

export default function (props) {
  return (
    <div className="stack-container">
      <img src={react_black} alt="black-react" id="react" />
      <img src={node_black} alt="node-black" id="node" />
    </div>
  );
}