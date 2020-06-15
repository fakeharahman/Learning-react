import React, { Component } from 'react';
import Validation from "./ValidationComponent/ValidationComponent"
import './App.css';
import CharComponent from "./CharComponent/CharComponent"


class App extends Component {
  state = {
    str: [],
    length: 0,

  }

  lengthString = (e) => {
    const length = e.target.value.length;
    const str = e.target.value.split("");
    // console.log(str.join(''))
    this.setState({
      length: length,
      str: str

    })
  }

  deleteChar = (index) => {
    const str = [...this.state.str];
    // const char = [...str[index]];
    str.splice(index, 1);
    console.log(index)
    this.setState({
      str: str,
      length: str.length
    })
  }



  render() {

    let string = null;


    if (this.state.length !== 0) {
      string = this.state.str.map((char, index) => {
        return <CharComponent char={char} key={index}
          click={() => this.deleteChar(index)}
        />
      })
    }

    return (
      <div className="App">
        <input type="text" onChange={this.lengthString} value={this.state.str.join("")} />
        <p>{this.state.length}</p>
        <Validation length={this.state.length} />
        {string}




      </div>
    )
  }
}

export default App;
