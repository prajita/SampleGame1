import React, { Component } from 'react';
import './App.css';
import * as utils from './utils';
import moment from 'moment';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false
    }
  }
  callFirstAPI() {
    utils.callFirstAPI().then(() => this.setState({ showInput: true }));
  }
  async showInput() {

    let dataInput1 = await utils.callInputAPI();
    console.log("Input of the game is here:::" + JSON.stringify(dataInput1));
    let date = moment().format("YYYY-MM-DD");
    let activedata = dataInput1.filter(e => (!e.endDate || moment(date).isBefore(e.endDate)) && moment(date).isAfter(e.startDate));
    //await utils.callOutputAPI( { 'count': activedata.length });
    // let dataInput2 = await utils.callInputAPI();
    let listOfCategories = activedata.map(e => e.category);
    let setOfActiveData = new Set(listOfCategories);
    let uniqueList = [...setOfActiveData], input2 = {};
    uniqueList.map(each => {
      let countEach = activedata.filter(e => e.category === each).length;
      return input2[each] = countEach;
    })
    console.log("input for 2nd API::" + input2);
    //await utils.callOutputAPI( input2);
    let sum = 0;
    activedata.map(e => {
      sum += parseInt(e.price);
      return sum;
    });
    await utils.callOutputAPI({ totalValue: sum });

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
