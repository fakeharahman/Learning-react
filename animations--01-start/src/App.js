import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from "react-transition-group/Transition";

const animationTiming = {
  enter: 400,
  exit: 1000
}

class App extends Component {
  state = {
    modalOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }


  render() {

    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>Toggle</button>
        <br />
        <Transition mountOnEnter unmountOnExit
          in={this.state.showBlock} timeout={animationTiming}
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}

        >
          {state => <div style={{
            backgroundColor: "red",
            margin: 'auto',
            width: 100,
            height: 100,
            transition: 'all 0.4s ease-out',
            opacity: state === 'exiting' ? 0 : 1
          }} />}
        </Transition>

        <Transition in={this.state.modalOpen} timeout={400} mountOnEnter unmountOnExit>
          {state => (
            <Modal show={state} closed={this.closeModal} />
          )}
        </Transition>

        {this.state.modalOpen ? <Backdrop show /> : null}


        <button className="Button" onClick={this.showModal} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
