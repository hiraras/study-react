import React, { Component } from 'react';
import Mask from './Components/Mask';
import Style from './index.css';

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
        <div className={Style.container}>
          <div className={Style.header}>
            <div className={Style.title}>{ title }</div>
            <div className={Style.close} onClick={onClose}>x</div>
          </div>
          <div className={Style.content}>{ content }</div>
        </div>
      </Mask>
    );
  }
}

export default Dialog;
