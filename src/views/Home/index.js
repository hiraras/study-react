import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Calendar from '../../components/Calendar';
import '../../Common/index.css';

class Home extends Component {
    ControlButtons = (props) => {
        return (<div>
            <button onClick={this.toggleAuthority}>{props.startText}</button>
        </div>);
    }

    toggleAuthority = () => {
        const hasAuthority = window.localStorage.getItem('authority') === '1';
        if (hasAuthority) {
            window.localStorage.removeItem('authority');
        } else {
            window.localStorage.setItem('authority', 1);
        }
    }

    render() {
        return (
            <div className={'wrapper'}>
                <MajorRender milliseconds={666} />
                <MajorRenderWithed time={'2020'} milliseconds={11} />
                <this.ControlButtons startText={'开始'} />
                <RenderAll name="hhh">
                    <span>11</span>
                    {(props) => (<span>{props.name}</span>)}
                </RenderAll>
                <Calendar />
            </div>
        );
    }
}

const MajorRender = (props) => {
    return (<div>
        <span>{ props.milliseconds }</span>
        <span style={{ color: 'red' }}>{ props.time }</span>
    </div>);
}

MajorRender.propsTypes = {
    milliseconds: PropTypes.string.isRequired,
};

const withAuthority = (Component) => {
    const hasAuthority = window.localStorage.getItem('authority') === '1';
    return (props) => {
        return hasAuthority && <Component {...props} />
    }
}

const MajorRenderWithed = withAuthority(MajorRender);

const RenderAll = (props) => {
    return (
        <Fragment>
            {props.children[0]}
            {props.children[1](props)}
        </Fragment>
    );
}

export default Home;

