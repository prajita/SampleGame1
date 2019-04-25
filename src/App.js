import React, { Component } from 'react';
import './App.css';
import * as utils from './utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false
    }
  }
  callFirstAPI() {
    utils.callFirstAPI().then(()=>this.setState({showInput:true}));
  }
  async showInput() {
    
    let dataInput = await utils.callInputAPI();
    console.log("Input of the game is here:::" + JSON.stringify(dataInput));
    console.log("count of the input::" + dataInput.length);
    let temp = { 'input': dataInput }
    let tempOut = { 'output': { 'count': dataInput.length } }
    let inputDataForPostAPI = {
      'sampleInput': temp,
      'sampleOutput': tempOut
    }
    console.log("input to post API::" + JSON.stringify(inputDataForPostAPI));
    let dataOut = await utils.callOutputAPI({'sampleOutput':tempOut});

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the game !
        </p>
          <button onClick={() => this.callFirstAPI()} >start here</button><br />
          {this.state.showInput && <button onClick={() => this.showInput()} >show Input</button>}
        </header>
      </div>
    );
  }

}

export default App;
