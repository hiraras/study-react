import React, { Component } from 'react';
import Home from './views/Home';
import Context from './views/Context';
import OldContext from './views/Context/OldContext';
import Subject from './views/Context/OldContext/Subject';
import Page from './views/Context/OldContext/Page';
import './App.css';

class App extends Component {
    state = {
        oldContextValue: {
            color: 'red',
            width: '24px',
        }
    }
    render() {
        return (
            <div>
                <Home />
                <Context />
                <OldContext value={this.state.oldContextValue}>
                    <Page>
                        <Subject />
                    </Page>
                </OldContext>
            </div>
        );
    }
}

export default App;
