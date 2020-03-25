import React, { Component } from 'react';
import Mask from './Components/Mask';
import './index.css';

class Dialog extends Component {

  componentDidMount() {
    if (this.props.closeAble) {
      document.onkeydown = (e) => {
        const code = e.keyCode || e.which;
        if (code === 27) {
          this.props.onClose();
        }
      }
    }
  }

  render() {
    const { title, content, onClose } = this.props;
    return (
      <Mask>
        <div className={'container'}>
          <div className={'header'}>
            <div className={'title'}>{ title }</div>
            <div className={'close'} onClick={onClose}>x</div>
          </div>
          <div className={'content'}>{ content }</div>
        </div>
      </Mask>
    );
  }
}

export default Dialog;
