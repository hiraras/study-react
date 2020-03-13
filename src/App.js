import React, { Component } from 'react';
import Home from './views/Home';
import Context from './views/Context';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Home />
                <Context />
            </div>
        );
    }
}

export default App;
