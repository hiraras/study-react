import React, { Component } from 'react';
import './index.css';

class Mask extends Component {

  render() {
    return (
      <div className={'mask'}>
        { this.props.children }
      </div>
    );
  }
}

export default Mask;
