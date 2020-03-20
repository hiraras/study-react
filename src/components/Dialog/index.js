import React, { Component } from 'react';
import Mask from './Components/Mask';
import './index.css';

class Dialog extends Component {

  render() {
    const { title, content } = this.props;
    console.log(content);
    return (
      <Mask>
        <div className={'container'}>
          <div className={'title'}>{ title }</div>
          <div className={'content'}>{ content }</div>
        </div>
      </Mask>
    );
  }
}

export default Dialog;
