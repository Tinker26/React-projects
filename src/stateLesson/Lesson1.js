import React from "react";
import PropTypes from 'prop-types';

class Lesson1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Umar",
            age: 19,
            job: "fullstack",
            date: new Date()
        };
    }
    render(){
        // console.log(this.state);
        return(
            <>
             <h1>My name is {this.state.name}</h1>
             <p>i am {this.state.age} years old </p>
             <h2>I am {this.state.job}</h2>

             <h1>It is {this.state.date.toLocaleDateString()}</h1>
            </>
        );
    }
}

export default Lesson1;