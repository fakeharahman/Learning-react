import React, { Component } from 'react';
import * as actionTypes from '../../store/actions'
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
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.results.map(res =>
                            (<li onClick={() => this.props.onDeleteResult(res.id)} key={res.id}>{res.value}</li>))
                    }

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => { // will get the state from redux and now we can convert it to the prop we want
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
};
const mapDispatchtoProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
        onStoreResult: (res) => dispatch({ type: actionTypes.STORE_RESULT, result: res }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, eleId: id }),
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);