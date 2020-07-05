import React, { Component } from 'react';
import * as actionTypes from '../Store/actions'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.personAdded} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeleted(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        personAdded: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, personData: { name: name, age: age } }),
        personDeleted: (personId) => dispatch({ type: actionTypes.DELETE_PERSON, id: personId })

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);