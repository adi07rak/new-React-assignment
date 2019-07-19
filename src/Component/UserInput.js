import React, { Component } from 'react';

class Uinput extends Component{
    render(){
        return(<div>
            <h2>this is input component:</h2>
            <input type="text" onChange={this.props.change}/>
            <button onClick={this.props.meth}>change color</button>
            
        </div>);
    }
}

export default Uinput;