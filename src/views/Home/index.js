import React, { Component, Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Calendar, Dialog, Button } from '../../components';
import '../../Common/index.css';

class Home extends Component {
    state = {
        count: 0,
        showDialog: true,
    }

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

    testSetState = () => {
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: this.state.count + 1 });
        // console.log(this.state.count); // 只会加一次

        // 当参数为一个函数时，每次执行结果都会变化到state中，update只会执行一次
        this.setState(this.increment);
        this.setState(this.increment);
        this.setState(this.increment);
        console.log(this.state.count); // 输出还是0，因为setState还是异步的，但是实际上加了3次

        // update会执行两次
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     this.setState({
        //         count: this.state.count + 1
        //     });
        // });
    }

    componentWillUpdate() {
        console.log('update');
    }

    increment = (state, props) => {
        return { count: state.count + 1 };
    }

    closeDialog = () => {
        this.setState({
            showDialog: false,
        });
    }

    render() {
        const { showDialog } = this.state;
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
                <button onClick={this.testSetState}>点击(count:{ this.state.count })</button>
                {showDialog && <Dialog title={'设置'} content={<DialogContent />} closeAble={true} onClose={this.closeDialog} />}
                <button>打开</button>
                <Counter />
                <Button text={'click'} />
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

const DialogContent = () => {
    return (
        <Fragment>
            <div>hello!</div>
        </Fragment>
    )
}

const Counter = () => {
    const [data, changeData] = useState({ count: 0, msg: 'count' });
    const [msg, changeMsg] = useState('hah');
    useEffect(() => {
        console.log('ss');
        setInterval(() => {
            changeData({ count: data.count + 1, msg: 'count:' + (data.count + 1) });
        }, 1000);
    }, 1);
    return <div>
        <p>{ data.count } -- { data.msg }</p>
        <p>{ msg }</p>
    </div>;
};

export default Home;
