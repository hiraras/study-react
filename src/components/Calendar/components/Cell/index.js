import React from 'react';
import './index.css';

const Cell = props => {
  return <div className={`cell ${!props.active && 'fade'}`}>{ props.text }</div>
}

export default Cell;
