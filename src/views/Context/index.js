import React, { Component } from 'react';
import CommonStyle from '../../Common/index.css';

const C = React.createContext('pop');
class Context extends Component {
    state = {
      data: {
        a: 1,
        b: 2,
        c: 3,
      }
    }
    render() {
        return (
            <div className={CommonStyle.wrapper}>
              <C.Provider value={this.state.data}>
                <Out />
              </C.Provider>
            </div>
        );
    }
}

const Out = (props) => {
  return <Inner />
}

class Inner extends Component {
  static contextType = C;
  render() {
    console.log(this.context);
    return <div>{this.context.a}</div>
  }
}

export default Context;
