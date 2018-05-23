import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Text extends Component {
  render(){
    return(
      <h1>Hello, <span style={{color: this.props.color}}> {this.props.value}  </span></h1>
  );

  }
}
  

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title"><Text color= "red" value= "Mya"/></h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
