import React from "react";
// import Radium from "radium";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
 margin: 16px auto;
border: 1px solid #eee;
width: 60%;
box-shadow: 0px 2px 3px #ccc;
padding: 16px;

@media(min-width:500px){
    width:450px;
}`;

const person = (props) => {

    return (
        // <div className="Person" >
        <StyledDiv>
            <p onClick={props.click}>Heyy {props.name} here and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};
export default person;