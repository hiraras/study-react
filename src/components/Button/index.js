import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    const { text, onClick } = this.props;
    return <button onClick={onClick}>{ text }</button>
  }
}
export default Button;
