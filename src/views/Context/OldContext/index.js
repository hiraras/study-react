import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../Common/index.css';

class OldContext extends Component {
  getChildContext() {
    return {
      data: this.props.value,
    };
  }
  render() {
    return <div className={'wrapper'}>
      {this.props.children}
    </div>
  }
}

OldContext.childContextTypes = {
  data: PropTypes.object,
}

export default OldContext;
