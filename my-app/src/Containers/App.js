import React, { Component } from 'react';
// import Radium, { StyleRoot } from "radium";
// import styled from "styled-components";
// import Person from "../Components/Persons/Person/Person"
import Persons from "../Components/Persons/Persons";
import classes from './App.css';
import Cockpit from "../Components/Cockpit/Cockpit"
import withClass from "../hoc/withClass"
import Aux from "../hoc/Auxiliary"
import AuthContext from "../context/auth-context"
// import ErrorBoundry from "../Components/ErrorBoundry/ErrorBoundry"



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
  constructor(props) {
    super(props);
    console.log("hehe app.js constructor")
  }

  state = {
    persons: [
      { id: "11", name: "fakeha", age: 28 },
      { id: "32", name: "sidra", age: 50 },
      { id: "223", name: "Rahil", age: 20 }
    ],
    other: "some other state",
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }
  static getDerivedStateFromProps(props, state) {
    console.log("get derived from props", props)
    return state;
  }

  componentDidMount() {
    console.log("app.js componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("app.js shouldcomponentupdate");
    return true;
  }


  componentDidUpdate(prevProps, prevState, snapshot) { // will run after render
    console.log("app.js componentDidUpdate ")

  }



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
    console.log(this.state.changeCounter)
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    }
    )

  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log("app js render")


    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons clicked={this.deletePersonHandler}
        changed={this.inputNameHandler}
        persons={this.state.persons}
        isAuthenticated={this.state.authenticated} />
        ;


      // style.backgroundColor = "green";
      // style[":hover"] = {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }

    }


    return (

      <Aux>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          <Cockpit personsLength={this.state.persons.length}
            title={this.props.title}
            showPersons={this.state.showPersons}
            click={this.togglePersonHandler}
          />
          {persons}

        </AuthContext.Provider>

      </Aux>

    );
    // return React.createElement("div", { className: 'App' }, "h1", "heyyy")
  }
}

export default withClass(App, classes.App);
