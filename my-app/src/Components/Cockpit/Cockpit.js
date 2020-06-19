import React from "react";
import classes from './Cockpit.css';


const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    } if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }
    let btnClass = "";
    if (props.showPersons)
        btnClass = (classes.gray)

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>Its working yayayaya</p>
            <button className={btnClass}
                // style={style}
                // alt={this.state.showPersons}
                onClick={props.click}>Toggle perosns</button>
        </div>)
}

export default cockpit;