import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './person/person';
import Demo from './person/props_demo';
import TWDB from './person/data_binding_demo';
import Uinput from './Component/UserInput';
import Uoutput from './Component/UserOutput';

class App extends Component{
  state = {
    title : 'output Component',
    toggle : false
  }

  OnStatechangeHandler = (event)=>{
    this.setState({
      title : event.target.value
    });
    this.key = event.target.value;
  }

 key = "adityaj";
 
 colorChangeHandler = () =>{
    this.setState({
      toggle : ! this.state.toggle
    });
 }

  render(){
    return (
      <div className="App">
        <h1>this is only one demo : {this.key}</h1>
        <Person name="props-demo"/>
        <Demo name="props-demo">Special props property</Demo>
        <TWDB />
        <Uinput change={this.OnStatechangeHandler} meth={this.colorChangeHandler}/>
        <Uoutput username={this.state.title} colchange={this.state.toggle}/>
      </div>
    );
  }
}

export default App;
