import React, { useEffect, useState } from 'react';
import { 
  Redirect,
  Link,
} from 'react-router-dom';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import StockItem from '../../Components/StockItem/StockItem';
import firebase from '../../Firebase';
import './Stocks.scss'

const Stocks = (props) => { 

  let approvedUser = 'bolu';

  let stocksRef = firebase.firestore()
  .collection('approved')
  .doc(approvedUser)
  .collection('stock')

  useEffect(() => {
    setStockAppear(1);
  }, [])

  const handleViews = (e) => { 
    let elem = e.target.getAttribute('id');
    
    switch(elem) { 
      case 'currentStocks': 
        setcurrentView('current');
        setStockAppear(stockList.length);
        break;

      case 'runningOut': 
        setcurrentView('runningout');
        setStockAppear(runningOutStocks.length);
        break;

      case 'outofstock':
        setcurrentView('outofstock');
        setStockAppear(outOfStock.length);
        break;
    }
  }
    
    useEffect(() => { 
      let stockArr = [];
        let db = stocksRef;
          db
          .where('stockQuantity', '>' , 0)
          .onSnapshot(res => { 
            res.docs.forEach(item => {
              stockArr.push(item.data());
              setStockList([...stockArr]);
            })
          })
    } ,[]);

    useEffect(() => {
      let runningOutArr = []
      stocksRef
      .get()
      .then(res => {
        res.docs.forEach(item => { 
          let watchQty = item.data().stockWatchQuantity;
          let stockQuantity = item.data().stockQuantity;
          if(watchQty === stockQuantity) { 
            runningOutArr.push(item.data());
          };
        })
        setRunningOutStocks([...runningOutArr]);
        runningOutArr = [];
      })
    }, [])

    useEffect(() => {
      let outOfStockArr = []
      let stocksRef = firebase.firestore()
      .collection('approved')
      .doc(approvedUser)
      .collection('stock')
      .where('stockQuantity', '==', 0)
      .get()
      .then(res => {
        res.docs.forEach(item => { 
          outOfStockArr.push(item.data())
        })
        setOutOfStock([...outOfStockArr]);
        outOfStockArr = [];
      })
    }, [])

    
  let [currentView, setcurrentView] = useState('current');
  let [stockAppear, setStockAppear] = useState(1);
  let [stockList, setStockList] = useState([]);
  let [runningOutStocks, setRunningOutStocks] = useState([]);
  let [outOfStock, setOutOfStock] = useState([]);
  
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
              stockList.map((item, index) => {
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
              runningOutStocks.map((item, index) => {
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
              outOfStock.map((item, index) => { 
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