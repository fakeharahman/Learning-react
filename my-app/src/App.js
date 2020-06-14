import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
  state = {
    persons: [{ name: "fakeha", age: 28 },
    { name: "sidra", age: 50 }, {
      name: "Rahil", age: 27
    }],
    other: "some other state"
  }

  nameChangeHandler = (newName) => {
    this.setState({
      persons: [{ name: newName, age: 20 },
      { name: "sidra", age: 50 }, {
        name: "Rahil", age: 22
      }]
    })
  }

  inputNameHandler = (e) => {
    this.setState({
      persons: [{ name: "fakeha", age: 28 },
      { name: e.target.value, age: 50 }, {
        name: "Rahil", age: 27
      }]
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
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>heyya React app here!</h1>
        <p>Its working yayayaya</p>
        <button
          style={style}
          onClick={this.nameChangeHandler.bind(this, "fakeha!!")}>Change Name</button>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.nameChangeHandler("Faaakkkkkeehha")}
          changed={this.inputNameHandler}>Yoyoyoyoy</Person>
        <Person name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement("div", { className: 'App' }, "h1", "heyyy")
  }
}

export default App;
