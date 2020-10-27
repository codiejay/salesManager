import React from 'react';
import './BigButton.scss';

const BigButton = (props) => { 

  const Imgstyle = { 
    background: `url(${props.bttImg}) no-repeat center/contain`,
    width: '25px',
    height: '25px'
  }
  return (
    <div id='bigBttn'>
      <div 
        className="bttnImg"
        style={Imgstyle}
      >
      </div>
      <button> 
        <h1>{props.bttnTitle}</h1>
      </button>
    </div> 
  )
};

export default BigButton;