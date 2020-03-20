import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subject extends Component {
  render() {
    const { data: { color } } = this.context;
    console.log(this.context);
    return (
      <h1 style={{ color }}>haha</h1>
    )
  }
}

export default Subject;

Subject.contextTypes = {
  data: PropTypes.object,
  data2: PropTypes.number
}
