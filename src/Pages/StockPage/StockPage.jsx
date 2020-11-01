import React, {useState} from 'react';
import { 
  useParams
} from 'react-router-dom';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './StockPage.scss';
import firebase from '../../Firebase';
import { useEffect } from 'react';
import {Redirect, withRouter} from 'react-router-dom';

const StockPage = (props)  => { 

  props.redirectStockPageHandler(true);

  let id = useParams();
    let dateClass = new Date();
    let fullDate = `${dateClass.getDate()} ${dateClass.getMonth()} ${dateClass.getFullYear()}`;
  const handleInputChange = (e) => { 
    let elemId = e.target.id;
    switch(elemId) { 
      case 'stockName': 
        setStock(stock, stock.stockName = e.target.value);
        setStock(stock, stock.lastUpdate = fullDate)
        break;
      case 'stockQuantity': 
        setStock(stock, stock.stockQuantity = parseInt(e.target.value));
        setStock(stock, stock.lastUpdate = fullDate)
        break;
      case 'sellingPrice':
        setStock(stock, stock.sellingPrice = parseInt(e.target.value));
        setStock(stock, stock.lastUpdate = fullDate)
        break;
      case 'purchasePrice': 
        setStock(stock, stock.purchasePrice = parseInt(e.target.value));
        setStock(stock, stock.lastUpdate = fullDate)
        break;
      case 'stockWatchQuantity': 
        setStock(stock, stock.stockWatchQuantity = parseInt(e.target.value));
        setStock(stock, stock.lastUpdate = fullDate)
        break;
    }
  }

  //updates store's stock
  const updateStoreStock = (e) => { 
    firebase.firestore()
      .collection('approved')
      .doc(props.approvedUser)
      .collection('store')
      .doc(e.target.id.toLowerCase())
      .collection('stocks')
      .doc(stock.stockName)
      .update({ 
        stockName: stock.stockName,
        stockQuantity: e.target.value
      })
  }
  useEffect(() => { 
    let cleanUp = firebase.firestore()
    .collection('approved')
    .doc(props.approvedUser)
    .collection('stock')
    .where('id', '==', id.id )
    .get()
    .then(d => { 
      d.docs.forEach(item => {
        let arr = item.data()
        setStock(arr);
        setStockId(stockId = item.id);

        //at this time 5:35am, I give up
      //   //setting the stock into each store
      //   props.storesList.map((item, index) => { 
      //   let newArr = []
      //   setStoreCount(storeCount+=1)
      //   firebase.firestore()
      //     .collection('approved')
      //     .doc(props.approvedUser)
      //     .collection('store')
      //     .doc(item.storeName)
      //     .collection('stocks'
      //     .doc(stockId)
      //     .get()
      //     .then(doc => {
      //       newArr.push(doc.data())
      //       // doIt(newArr)
      //       setStoresStock([...storesStock, storesStock.push(doc.data())])
      //     })
      //     setStoresStock(storesStock.push(newArr))
      // })
      })
    })
  }, [])


  const formSubmitted = (e) => { 
    e.preventDefault();
    setUpdateButton('Updating...');
    let dbRef = firebase.firestore()
      .collection('approved')
      .doc(props.approvedUser)
      .collection('stock')
      .doc(stockId)
      .update(stock)
      .then(d => { 
        
        props.storesList.forEach(item => {
          firebase.firestore()
            .collection('approved')
            .doc(props.approvedUser)
            .collection('store')
            .doc(item.storeName)
            .collection('stocks')
            .doc('enya')
            .update({ 
              stockName: stock.stockName
            })
        })

        setUpdateButton('Update item');
      })
  }

  const deleteItemHandler = () => { 
    const redirectTo = () => { 
      setShouldNotRedirect(false);
    }

    let dbRef = firebase.firestore()
    .collection('approved')
    .doc(props.approvedUser)
    .collection('stock')
    .doc(stockId)
    .delete()
    .then((res) => { 
      props.storesList.forEach(item => {
        firebase.firestore()
          .collection('approved')
          .doc(props.approvedUser)
          .collection('store')
          .doc(item.storeName)
          .collection('stocks')
          .doc(stockId)
          .delete()
          .then(d => { 
            console.log('deleted');
          })
        props.redirectStockPageHandler(false);
      })
    });

    deleteFromStores()
  }

  const deleteFromStores = () => { 
  }

  let [stock, setStock] = useState([]);
  let [stockId, setStockId] = useState('');
  let [updateButton, setUpdateButton] = useState('update item');
  let [shouldNotRedirect, setShouldNotRedirect] = useState(true);
  let [storesStock, setStoresStock] = useState([]);
  let [storeCount, setStoreCount] = useState(0)

  return ( 
    props.redirectStockPage ? 
    <div id="stockPage">
      <LoggedInHeader 
        signOut={props.signOut}
        userImg= {props.userImg}
      />

      <div className="stockpageBody">
        <Sidebar />
        <div className="stockPageMain">
          <div id="heading">
            <div>
              <h1>{stock.stockName}</h1>
              <p>added by {stock.adminInCharge}</p>
              <p>date added: { stock.date ?  stock.date.split(' ').join('/') : ''}</p>

            </div>
            <div 
              onClick={deleteItemHandler}
              className="bin"
            ></div>
          </div>

          <form onSubmit={formSubmitted} >
            <div id='inputs'>
              <div>
                <label htmlFor='stockName'>Item Name</label>
                <input 
                  onChange={handleInputChange}
                  type='text'
                  id='stockName'
                  placeholder={stock.stockName}
                />
              </div>

              <div>
                <label htmlFor='stockQuantity'>Item Quantity</label>
                <input 
                  onChange={handleInputChange}
                  type='number'
                  id='stockQuantity'
                  placeholder={stock.stockQuantity}

                />
              </div>

              <div>
                <label htmlFor='stockSelling'>Selling Price</label>
                <input 
                  onChange={handleInputChange}
                  type='number'
                  id='sellingPrice'
                  placeholder={stock.sellingPrice}

                />
              </div>

              <div>
                <label htmlFor='stockSelling'>Watch Quantity</label>
                <input 
                  onChange={handleInputChange}
                  type='number'
                  id='stockWatchQuantity'
                  placeholder={stock.stockWatchQuantity}
                />
              </div>

              <div>
                <label htmlFor='stockPrice'>Purchase Price</label>
                <input 
                  onChange={handleInputChange}
                  type='number'
                  id='purchasePrice'
                  placeholder={stock.purchasePrice}

                />
              </div>

            </div>
            <button> {updateButton} </button>
          </form>

          <div className="stores">
            { 
              props.storesList.map((item, index) => { 
                return ( 
                  <div key={index}>
                    <h3> {item.storeName} </h3>
                    <input 
                      id={item.storeName}
                      type='number' 
                      placeholder= {`set stock quantity for ${item.storeName}`}
                      onChange={updateStoreStock}
                    />
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
    : 
    <Redirect to='/stocks' />
  )
}


export default StockPage;