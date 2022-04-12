import React, { Component } from 'react'


  
const Component1 = (props) => {
  return (
      <div>
         <h1>Hello, {props.name}</h1>
         <p>He is a {props.age} years old</p>
      </div>
  )
}

export default Component1;
