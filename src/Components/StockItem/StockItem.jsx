import React from 'react';
import './StockItem.scss';

const StockItem = (props) => { 

  return ( 
    <div id={props.itemId} className='stockItem'> 
      <div className="mainItem">
        <h3 id='itemName'> {props.itemName} </h3>
        <h3 id="itemQuantity"> {props.itemQuantity} </h3>
        <h3 id="itemLastUpdate"> {props.itemLastUpdate} </h3>
      </div>
    </div>
  )
};

export default StockItem;