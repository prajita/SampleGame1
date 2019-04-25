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
    utils.callFirstAPI((data) => { this.setState({ showInput: true }) });
  }
  async showInput() {
    // console.log("calling input API");
    // utils.callInputAPI((data) => {
    //   console.log("Input of the game is here:::" + JSON.stringify(data));
    //   console.log("count of the input::"+data.length);
    //   utils.callOutputAPI(data.length,(data)=>console.log(data));
    // }
    // );
    let data1 = await utils.callInputAPI();
    console.log("Input of the game is here:::" + JSON.stringify(data1));
    console.log("count of the input::" + data1.length);
    let dataOut = await utils.callOutputAPI(data1.length, (data) => console.log(data));

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
