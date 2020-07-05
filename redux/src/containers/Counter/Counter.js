import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

class Counter extends Component {


    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
            </div>
        );
    }
}

const mapStateToProps = state => { // will get the state from redux and now we can convert it to the prop we want
    return {
        ctr: state.counter
    };
};
const mapDispatchtoProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAddCounter: () => dispatch({ type: "ADD", value: 5 }),
        onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);