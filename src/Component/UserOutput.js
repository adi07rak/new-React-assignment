import React, { Component } from 'react';

class Uoutput extends Component{
    render(){
        return(<div>
            <h2>this is : {this.props.username }</h2>
            <p>hekiooo</p>
            <p>dgdgdgdgdgdgdgdgdg</p>
            {this.props.colchange ? <div>
                <button style={{backgroundColor:"white"}}>Submit</button>
            </div>:
            <div>
                <button style={{backgroundColor:"yellow"}}>Submit</button>
            </div>
            }
        </div>);
    }
} 

export default Uoutput;