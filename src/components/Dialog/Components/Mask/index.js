import React, { Component } from 'react';
import Style from './index.css';

class Mask extends Component {

  render() {
    return (
      <div className={Style.mask}>
        { this.props.children }
      </div>
    );
  }
}

export default Mask;
