import React, { Component } from "react";
import Person from "./Person/Person"

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFtomProps perosns.js")
    //     return state
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("persons.js shouldcomponentupdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("perons.js getSnapshotBeforeUpdate")
        return { message: "snapshot!" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // will run after render
        console.log("perosns.js componentDidUpdate ")
        console.log(snapshot)
    }

    render() {
        console.log("persons.js render")
        return (
            this.props.persons.map((person, index) => <Person
                name={person.name} age={person.age}
                key={person.id}
                click={() => this.props.clicked(index)}

                changed={(e) => this.props.changed(e, person.id)} />)
        )
    }
}

export default Persons;