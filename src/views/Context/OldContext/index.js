import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class OldContext extends Component {
  getChildContext() {
    return {
      data: this.props.value,
    };
  }
  render() {
    return <Fragment>
      {this.props.children}
    </Fragment>
  }
}

OldContext.childContextTypes = {
  data: PropTypes.object,
}

export default OldContext;
