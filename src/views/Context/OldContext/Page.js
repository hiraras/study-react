import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
  getChildContext = () => {
    return {
      data2: 2
    }
  }

  render() {
    const elem = React.Children.map(this.props.children, (child) => {
      return child;
    });
    return <div>
      {elem}
    </div>
  }
}

export default Page;

Page.childContextTypes = {
  data2: PropTypes.number,
}

Page.displayName = "PageAlias";
