import React, { Component } from "react";
// import Radium from "radium";
import classes from "./Person.css";
// import styled from "styled-components";
import Aux from "../../../hoc/Auxiliary"
import withClass from "../../../hoc/withClass"
import PropTypes from "prop-types"
import AuthContext from '../../../context/auth-context'

// const StyledDiv = styled.div`
//  margin: 16px auto;
// border: 1px solid #eee;
// width: 60%;
// box-shadow: 0px 2px 3px #ccc;
// padding: 16px;

// @media(min-width:500px){
//     width:450px;
// }`;

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputEleRef = React.createRef();
    }

    componentDidMount() {
        // this.inputEle.focus();
        this.inputEleRef.current.focus();
    }

    render() {
        console.log("Person.js render")
        return (
            <Aux>
                <AuthContext.Consumer>{(context) => context.authenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
                </AuthContext.Consumer>

                <p onClick={this.props.click}>Heyy {this.props.name} here and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}
                    // ref={(inputEle) => this.inputEle = inputEle}
                    ref={this.inputEleRef}
                    value={this.props.name} />
            </Aux>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);