import React from 'react';
import { tsPropertySignature } from '@babel/types';

// this is demo of how you can use such component as a function,
//  rather than importing component class in your component.

const person = (props) =>{
    return (<div>
        <h1>This is first demo {Math.floor(Math.random() * 30)} with function component</h1>
        <div>msg is : {props.name}</div>   
    </div>
    );
}

export default person;

//demo explain how props actually works in component.