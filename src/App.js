import React, { Component } from 'react';
import Home from './views/Home';
import Context from './views/Context';
import OldContext from './views/Context/OldContext';
import Subject from './views/Context/OldContext/Subject';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Home />
                <Context />
                <OldContext value={{color: 'red', width: '24px'}}>
                    <Subject />
                </OldContext>
            </div>
        );
    }
}

export default App;
