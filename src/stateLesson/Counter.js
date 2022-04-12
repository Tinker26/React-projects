import React from "react";
import PropTypes from 'prop-types';
import './main.css';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         count: 0
        };
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement(){
        if(this.state.count==0){
            this.setState({
                count: this.state.count
            })
        }else{
            this.setState({
                count: this.state.count -1
            })

        }
    }

    reset(){
        this.setState({
            count:0
        })
    }
    render(){
       
        return(
        <div className="main">
            <button className="plus" onClick={(e) => this.increment(e)}>+</button>
            <button className="minus" onClick={(e) => this.decrement(e)}>-</button>
            <button className="reset" onClick={(e) => this.reset(e)}>Reset</button>
            <h1>Count: {this.state.count}</h1>
        </div>   
        );
    }
}

export default Counter;