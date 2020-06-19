import React, { Component } from "react";
// import Radium from "radium";
import classes from "./Person.css";
// import styled from "styled-components";

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
    render() {
        console.log("Person.js render")
        return (
            <div className={classes.Person}>

                <p onClick={this.props.click}>Heyy {this.props.name} here and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
};
export default Person;