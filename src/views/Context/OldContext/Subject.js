import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subject extends Component {
  render() {
    console.log(this.context);
    return (
      <h1 style={{ color: this.context.data.color }}>haha</h1>
    )
  }
}

export default Subject;

Subject.contextTypes = {
  data: PropTypes.object,
}
