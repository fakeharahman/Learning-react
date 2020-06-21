import React, { PureComponent } from "react";
import Person from "./Person/Person"

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFtomProps perosns.js")
    //     return state
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("persons.js shouldcomponentupdate");
    //     if (nextProps.persons !== this.props.persons)
    //         return true;
    //     return false
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("perons.js getSnapshotBeforeUpdate")
        return { message: "snapshot!" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // will run after render
        console.log("perosns.js componentDidUpdate ")
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log("perons.js componentWillUnmount");
    }

    render() {
        console.log("persons.js render")
        return (
            this.props.persons.map((person, index) => <Person
                name={person.name} age={person.age}
                key={person.id}
                click={() => this.props.clicked(index)}
                // isAuth={this.props.isAuthenticated}
                changed={(e) => this.props.changed(e, person.id)} />)
        )
    }
}

export default Persons;