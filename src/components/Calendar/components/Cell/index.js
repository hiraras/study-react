import React from 'react';
import Style from './index.css';

const Cell = props => {
  return <div className={`${Style.cell} ${!props.active && 'fade'}`}>{ props.text }</div>
}

export default Cell;
