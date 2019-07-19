import React, { Component } from 'react';

class TWDB extends Component{

    state = {
        name:"aditya"
    };
    statechangeHandler = (event)=>{
        this.setState ( {
            name: event.target.value
        });
    }

    render(){
        return (<div>
            <h1>Hello form 2 way databinding, name : {this.state.name}</h1>
            <input type="text" onChange={this.statechangeHandler} value={this.state.name}/>
        </div>);
    }
}

export default TWDB;