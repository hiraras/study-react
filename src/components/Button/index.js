import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    const { text } = this.props;
    console.log('render button');
    return <button>{ text }</button>
  }
}
export default Button;
