import React, { useEffect, useRef } from "react";
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = (props) => {

    const togglePeronsRef = useRef();

    useEffect(() => {
        togglePeronsRef.current.click();
        console.log("cockpit.js UseEffect")
        // alert("useeffect") 
        return (() => console.log("cockpit.js return cleanup useeffect"))
    }, [])

    useEffect(() => {
        console.log("Cockpit.js 2nd useeffect")
        return (() => console.log("cockpit.js return 2nd cleanup useeffect"))

    })

    const assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    } if (props.personsLength <= 1) {
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
                ref={togglePeronsRef}
                onClick={props.click}>Toggle perosns</button>
            <AuthContext.Consumer>{(context) => <button onClick={context.login}>Log in</button>}</AuthContext.Consumer>

        </div>)
}

export default React.memo(cockpit);