import React from 'react';
import { 
  Redirect,
  Link,
} from 'react-router-dom';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Stocks.scss'
import StockItem from '../../Components/StockItem/StockItem';

const Stocks = (props) => { 

  return ( 
    props.loggedIn 
    ? 
    <div id='stocksPage'> 
      <LoggedInHeader 
        signOut={props.signOut}
        userImg= {props.userImg}
      />

      <div id="stocksBody">
        <Sidebar />
        <div className="stocksMain">
          <h3>Stocks</h3>

          <div className="options">
            <div>Current Stocks</div> 
            <div>Running Out</div> 
            <div>Out Of Stock</div> 
          </div>

          <div className="stocksList">
          <div className="top">
            <h3>Item Name</h3>
            <h3>Item Quantity</h3>
            <h3>Updated Date</h3>
          </div>
            <StockItem 
              itemId='ui4iu3ui4iw'
              itemName='Techno Spark 5'
              itemQuantity='5'
              itemLastUpdate='12 04 55'
            />
          </div>
        </div>
      </div>
    </div>
    : 
    <Redirect to='/store' />
    
  )
}

export default Stocks;