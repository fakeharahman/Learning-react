import React from "react";
import Person from "./Person/Person"

const persons = (props) => (
    props.persons.map((person, index) => <Person
        name={person.name} age={person.age}
        key={person.id}
        click={() => props.clicked(index)}

        changed={(e) => props.changed(e, person.id)} />)
)

export default persons;