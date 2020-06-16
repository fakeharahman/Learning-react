import React, { Component } from 'react';
// import Radium, { StyleRoot } from "radium";
// import styled from "styled-components";
import Person from "./Person/Person"
import './App.css';


// const StyledButton = styled.button`
// background-color: ${props => props.alt ? "green" : "gray"};
// color: white;
// font: inherit;
// padding: 8px;
// border: 1px solid blue;
// box-shadow: 0px 2px 3px #000;
// cursor: pointer;
// &:hover {
//  background-color: ${props => props.alt ? "lightgreen" : "lightgray"};
//  color: black;
// `
class App extends Component {
  state = {
    persons: [
      { id: "11", name: "fakeha", age: 28 },
      { id: "32", name: "sidra", age: 50 },
      { id: "223", name: "Rahil", age: 20 }
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


    const style = {
      backgroundColor: "gray",
      color: "white",
      font: "inherit",
      padding: "8px",
      border: "1px solid blue",
      boxShadow: "0px 2px 3px #000",
      cursor: "pointer",
      // ":hover": {
      //   backgroundColor: "lightgray",
      //   color: "black"

      // }
    }

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

        </div>
      );
      // style.backgroundColor = "green";
      // style[":hover"] = {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }

    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    } if (this.state.persons.length <= 1) {
      classes.push("bold")
    }

    return (

      <div className="App">
        <h1>heyya React app here!</h1>
        <p className={classes.join(" ")}>Its working yayayaya</p>
        <button className="button"
          // style={style}
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}>Toggle perosns</button>

        {persons}



      </div>

    );
    // return React.createElement("div", { className: 'App' }, "h1", "heyyy")
  }
}

export default App;
