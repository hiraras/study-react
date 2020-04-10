import React from 'react';
import Style from './index.css';

const Cell = props => {
  const className = `${Style.cell} ${!props.active && Style.fade} ${props.selected && Style.selected}`;
  return <div className={className}>{ props.text }</div>
}

export default Cell;
