import React, { useEffect } from 'react';
import { 
  Redirect,
  Link,
} from 'react-router-dom';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Stocks.scss'
import StockItem from '../../Components/StockItem/StockItem';
import { useState } from 'react';

const Stocks = (props) => { 

  useEffect(() => {
    setStockAppear(1);
  }, [])

  const handleViews = (e) => { 
    let elem = e.target.getAttribute('id');
    
    switch(elem) { 
      case 'currentStocks': 
        setcurrentView('current');
        setStockAppear(props.stocksList.length);

        break;
      case 'runningOut': 
        setcurrentView('runningout');
        setStockAppear(props.runningOutStocks.length);
        break;
      case 'outofstock':
        setcurrentView('outofstock');
        setStockAppear(props.outOfStock.length);
        break;
    }
  }

    
  let [currentView, setcurrentView] = useState('current');
  let [stockAppear, setStockAppear] = useState(1)
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
          <div className="header">
            <h3>Stocks</h3>
          </div>
          <div className="options">
            <div 
              onClick={handleViews}
              id={(currentView === 'current') ? 'current' : 'currentStocks'}
            >
              Current Stocks
            </div> 
            <div
            onClick={handleViews}
            id={(currentView === 'runningout') ? 'current' : 'runningOut'}
            >
              Running Out
            </div> 
            <div 
            onClick={handleViews}
            id={(currentView === 'outofstock') ? 'current' : 'outofstock'}
            >
              Out Of Stock
            </div> 
          </div>

          <div className="stocksList">
          <div className="top">
            <h3>Item Name</h3>
            <h3>Item Quantity</h3>
            <h3>Updated Date</h3>
          </div>

          <div 
            className="loadingBox"
            style={{
              display: ((stockAppear > 0) ? 'none' : 'grid')
            }} 
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div
            className='stockBox'
            id='mainStock'
            style={{ 
              display: 
               `${(currentView === 'current') ? 'block' : 'none'}`
            }}
          >
            { 
              /* for current stocks */
              props.stocksList.map((item, index) => {
                let date = item.date.split(' ').join('/');
                return ( 
                <StockItem 
                  location='/stocks/'
                  lastUpdate={item.lastUpdate}
                  key={index}
                  itemId={item.id}
                  itemName={item.stockName}
                  itemQuantity={item.stockQuantity}
                  itemLastUpdate={date}
                />
                )
              })
            
            }
          </div>
          <div 
            className='stockBox'
            id="runningOut"
            style={{ 
              display: 
               `${(currentView === 'runningout') ? 'block' : 'none'}`
            }}
          >
            {
              props.runningOutStocks.map((item, index) => {
                let date = item.date.split(' ').join('/');
                return ( 
                  <StockItem 
                    location='/stocks/'
                    lastUpdate={item.lastUpdate}
                    key={index}
                    itemId={item.id}
                    itemName={item.stockName}
                    itemQuantity={item.stockQuantity}
                    itemLastUpdate={date}
                />
                )
              })
            }
          </div>
          <div 
            className='stockBox'
            id="outOfStock"
            style={{ 
              display: 
               `${(currentView === 'outofstock') ? 'block' : 'none'}`
            }}
          >
            { 
              props.outOfStock.map((item, index) => { 
                let date = item.date.split(' ').join('/');
                return ( 
                  <StockItem 
                    location='/stocks/'
                    lastUpdate={item.lastUpdate}
                    key={index}
                    itemId={item.id}
                    itemName={item.stockName}
                    itemQuantity={item.stockQuantity}
                    itemLastUpdate={date}
                    lastUpdate={item.lastUpdate}
                />
                )
              })
            }
          </div>
          </div>
        </div>
      </div>
    </div>
    : 
    <Redirect to='/store' />
    
  )
}

export default Stocks;