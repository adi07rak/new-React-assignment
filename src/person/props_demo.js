import React, { Component } from 'react';

class Demo extends Component{
    render(props){
        return(
            <div>
                <p>hello from props demo, msg: {this.props.name}</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Demo;

//line 8 explains special props feature that has been sent through App.js file