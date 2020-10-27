import React, { useState } from 'react';

const Input = (props) => { 

  return ( 
    <input 
      placeholder='this is a sample'
      onChange={props.inputChange}
    />
  )
}

export default Input;