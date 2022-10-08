import React, { Component } from 'react';

class TempControl extends Component {
    constructor(){
        super();
        this.state = {
            temp: 50
        }
    }
   render(){
    return (
        <div>
            <h1> Temp Control Component </h1>
        </div>
    )
   }
};

export default TempControl