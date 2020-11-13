import React from 'react';
import './StockItem.scss';
import { Link } from 'react-router-dom'

const StockItem = (props) => { 

  return ( 
    <Link 
      id={props.itemId} 
      className='stockItem' 
      to={`${props.location}${props.itemId}`}
    > 
      <div className="mainItem">
        <h3 id='itemName'> {props.itemName} </h3>
        <h3 id="itemQuantity"> {props.itemQuantity} </h3>
        <h3 id="itemLastUpdate"> {(props.lastUpdate === parseInt(0)) ? props.itemLastUpdate.split(' ').join('/') : props.lastUpdate.split(' ').join('/')} </h3>
      </div>
    </Link>
  )
};

export default StockItem;