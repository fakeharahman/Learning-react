import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: "11", name: "fakeha", age: 28 },
      { id: "32", name: "sidra", age: 50 },
      { id: "223", name: "Rahil", age: 27 }
    ],
    other: "some other state",
    showPersons: true
  }

  // nameChangeHandler = (newName) => {
  //   this.setState({
  //     persons: [{ name: newName, age: 20 },
  //     { name: "sidra", age: 50 }, {
  //       name: "Rahil", age: 22
  //     }]
  //   })
  // }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons })
    // console.log(this.state)
  }

  inputNameHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = { ...this.state.persons[personIndex] };
    const persons = [...this.state.persons];
    person.name = e.target.value;
    persons[personIndex] = person;
    this.setState({ persons: persons })


    // this.setState({
    //   persons: [{ name: "fakeha", age: 28 },
    //   { name: e.target.value, age: 50 }, {
    //     name: "Rahil", age: 27
    //   }]
    // })
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons
              .map((person, index) => <Person
                name={person.name} age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(e) => this.inputNameHandler(e, person.id)} />)
          }
          {/* <Person name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.nameChangeHandler.bind(this, "fakeha!!")}
            changed={this.inputNameHandler}>Yoyoyoyoy</Person>
          <Person name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );

    }

    const style = {
      backgroundColor: "gray",
      color: "white",
      font: "inherit",
      padding: "8px",
      border: "1px solid blue",
      boxShadow: "0px 2px 3px #000",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>heyya React app here!</h1>
        <p>Its working yayayaya</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle perosns</button>

        {persons}



      </div>
    );
    // return React.createElement("div", { className: 'App' }, "h1", "heyyy")
  }
}

export default App;
