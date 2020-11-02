import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect, useParams } from 'react-router-dom';
import Login from './Pages/Login/Login';
import firebase from './Firebase';
import Store from './Pages/Store/Store';
import AddStock from './Pages/AddStock/AddStock';
import Stocks from './Pages/Stocks/Stocks';
import StockPage from './Pages/StockPage/StockPage';
import AddStore from './Pages/AddStore/AddStore';
import Manage from './Pages/Manage/Manage';
import StorePage from './Pages/StorePage/StorePage';

const App = () => {
  

  let approvedUser = 'bolu';
  let userName = firebase.auth().currentUser;
  let adminList = ['akpan', 'bolu', 'agbelemo'];

  //Function to get stock for store 
  // const getStocks = (e) => { 
  //   let newArr = [];
  //   firebase.firestore()
  //     .collection('approved')
  //     .doc(approvedUser)
  //     .collection('store')
  //     .doc(e)
  //     .collection('stocks')
  //     .onSnapshot(data => {
  //       data.docs.forEach(item => {
  //         newArr.push(item.data())
  //       })
  //       setStoreStock([...newArr]);
  //       newArr = [];
  //     })
  // }
  //Function for managePage
  const deleteStore = (e) => {
    firebase.firestore()
      .collection('approved')
      .doc(approvedUser)
      .collection('store')
      .doc(e)
      .delete()
      .then(d => { 
        console.log('deleted')
      })
  }

  useEffect(() => { 
    let newArr = [];
    firebase.firestore()
      .collection('approved')
      .doc(approvedUser)
      .collection('store')
      .where('show', '==', true)
      .onSnapshot(data => { 
        data.docs.forEach(item => { 
          newArr.push(item.data());
        })
        setStoreList(newArr);
        newArr=[];
      })
  }, [])
  
  //functions for stockPage
  const redirectStockPageHandler = (event) => { 
    setRedirectStockPage(event);
  }

  //function for addStore page 
  const makeNewStore = (store, attendant) =>{ 

    if(store.length > 0 && attendant.pin.length > 4) {

      let dateClass = new Date();
      let fullDate = `${dateClass.getDate()} ${dateClass.getMonth()} ${dateClass.getFullYear()}`;
      setButtonText('processing');
      let storesRef = firebase.firestore()
      .collection('approved')
      .doc(approvedUser)
      .collection('store')
      .doc(store.toLowerCase())
      .set({ 
        storeName: store.toLowerCase(),
        attendants: [ 
          {name: attendant.name, pin: attendant.pin}
        ],
        createdBy: userName.displayName,
        dateAdded: fullDate,
        show: true,
      })
      .then((d) => { 
        firebase.firestore()
          .collection('approved')
          .doc(approvedUser)
          .collection('stock')
          .get()
          .then(d => { 
            d.docs.forEach(item => { 
              firebase.firestore()
              .collection('approved')
              .doc(approvedUser)
              .collection('store')
              .doc(store.toLowerCase())
              .collection('stocks')
              .doc(item.data().stockName)
              .set({...item.data(), stockQuantity: 0})
              .then(d => { 
                console.log('fuckong legend')
              })
            })
          })


        setButtonText('done');
        setTimeout(() => {
          setButtonText('create store');
        }, 1000);
      })
    }
    
  }


  //fetch full Stocks here and return to addstock comp.
  let stocksRef = firebase.firestore()
  .collection('approved')
  .doc(approvedUser)
  .collection('stock')
  .where('stockQuantity', '>' , 0)

  let runningOutStockRef = firebase.firestore()
    .collection('approved')
    .doc(approvedUser)
    .collection('stock')
    .where('stockQuantity', '<=' , 3);

  let outOfStockRef = firebase.firestore()
    .collection('approved')
    .doc(approvedUser)
    .collection('stock')
    .where('stockQuantity', '<=' , 0);

  useEffect(() => { 
    let newArr = [];
    stocksRef.onSnapshot((res) => {
      res.docs.forEach((item, index) => {
        newArr.push(item.data());
      });
      setStocksList([...newArr]);
      newArr = [];
    }) 
  }, []);

  useEffect(() => { 
    let newArr = [];
    runningOutStockRef.onSnapshot(results => {
      results.docs.forEach(item => { 
        newArr.push(item.data())
      })

      setRunningOut([...newArr]);
      newArr = [];
    })
  }, [])

  useEffect(() => { 
    outOfStockRef.onSnapshot(result => {
      let newArr = [];
      result.docs.forEach(item => { 
        newArr.push(item.data())
      })
      setoutOfStock([...newArr]);
      newArr = [];
    })
  }, [])


  //props call from addStock
  const PushItem = (item) => { 
    let dateClass = new Date();
    setaddStockBttn('please wait');
    let fullDate = `${dateClass.getDate()} ${dateClass.getMonth()} ${dateClass.getFullYear()}`;
    firebase.firestore()
    .collection('approved')
    .doc(approvedUser)
    .collection('stock')
    .doc(item.stockName.toLowerCase())
    .set({ 
      ...item, 
      date: fullDate, 
      id: `${dateClass.getTime()}`,
      adminInCharge: userName.displayName
    })
    .then(data => { 
        
        //add the new stock to all stores
        storeList.forEach(store => { 
          firebase.firestore()
            .collection('approved')
            .doc(approvedUser)
            .collection('store')
            .doc(store.storeName)
            .collection('stocks')
            .doc(item.stockName.toLowerCase())
            .set({ 
              ...item, 
              date: fullDate, 
              id: `${dateClass.getTime()}`,
              adminInCharge: userName.displayName,
              stockQuantity: 0
            })
        })

        setaddStockBttn('done');
        setaddedStock('Stock has been added successfully');
        setShowSucess(true);
        let success = setInterval(() => {
          setShowSucess(false);
          setaddStockBttn('add to store');
          runThis()
        }, 1000);

        let runThis = () => { 
          clearInterval(success);
        }
    })
    .catch(err => { 
      setaddedStock('There was an error, try again.')
    })
  }
  //function used to logout user.
  const signOutHandler = (event) => { 
    firebase.auth().signOut()
    .then(() => { 
      return setLoggedIn(false);
    })
    .catch((error) => { 
      console.error(error)
    })
  };

  //automatically log a user in
  firebase.auth().onAuthStateChanged(user => { 
    if(user) { 
      setLoggedIn(true);
      setUserImg(user.photoURL);
    }
    else { 
      setLoggedIn(false);
    }
  })

  //admin props
  let [loggedIn, setLoggedIn] = useState(false);
  let [userImg, setUserImg] = useState('');
  let [cashTotal, setcashTotal] = useState(0);
  let [totals, setTotlas] = useState({ 
    cashTotal: 12000,
    cashReturn: 89503,
    cashProfit: 28990,
  });


  //hooks for addStock component
  let [addedStock, setaddedStock] = useState('Stock has been added successfully');
  let [ShowSucess, setShowSucess] = useState(false);
  let [addStockBttn, setaddStockBttn] = useState('add to store');

  //hooks for stocks comp
  let [stocksList, setStocksList] = useState([]);
  let [runningOut, setRunningOut ] = useState([]);
  let [outOfStock, setoutOfStock] = useState([]);

  //hooks for stockPage comp
  let [individualStock, setindividualStock] = useState([]);
  let [redirectStockPage, setRedirectStockPage] = useState(true);

  //hooks for addStore comp
  let [buttonText, setButtonText] = useState('create store')
  
  //hooks for manage comp
  let [storeList, setStoreList] = useState([]);

  //hooks for stores stocks page
  const [StoreStock, setStoreStock] = useState([]);

  return (
    loggedIn 
    ?
      <BrowserRouter>
        <Route>
          <Redirect to='/manage/pota' />
        </Route> 
        <Switch>  
          <Route 
            exact
            path='/store'
            component={() => {
              return (
              <Store 
                loggedIn={loggedIn}
                userImg={userImg}
                cashTotal={cashTotal}
                signOut={signOutHandler}
                cashTotal={totals.cashTotal}
                cashReturn={totals.cashReturn}
                cashProfit={totals.cashProfit}
              />
              )
            }}
          >
          </Route>
          <Route
            path='/addstock'
            component={() => { 
              return (
                <AddStock 
                  loggedIn={loggedIn}
                  signOut={signOutHandler}
                  userImg={userImg}
                  approvedUser={approvedUser}
                  PushItem={PushItem}
                  addedStock={addedStock}
                  ShowSucess={ShowSucess}
                  addStockBttn={addStockBttn}
                />
              )
            }}
          > 
          </Route>
          <Route 
            exact
            path='/stocks'
            component={() => { 
              return ( 
                <Stocks 
                  loggedIn={loggedIn}
                  signOut={signOutHandler}
                  userImg={userImg}
                  approvedUser={approvedUser}
                  stocksList={stocksList}
                  runningOutStocks={runningOut}
                  outOfStock={outOfStock}
                />
              )
            }}
          > 

          </Route>
          <Route 
            exact
            path='/stocks/:id'
            component={() => { 
              return ( 
                <StockPage 
                  storesList={storeList}
                  loggedIn={loggedIn}
                  signOut={signOutHandler}
                  userImg={userImg}
                  approvedUser={approvedUser}
                  redirectStockPage={redirectStockPage}
                  redirectStockPageHandler={redirectStockPageHandler}
                />
              )
            }}
          > 

          </Route>
          <Route
            exact
            path='/addstore'
            component={() => {
              return ( 
                <AddStore 
                  loggedIn={loggedIn}
                  signOut={signOutHandler}
                  userImg={userImg}
                  approvedUser={approvedUser}
                  makeNewStore={makeNewStore}
                  buttonText={buttonText}
                />
              )
            }}
          >

          </Route>

          <Route
            exact
            path='/manage'
            component={() => {
              return (
                <Manage 
                  loggedIn={loggedIn}
                  signOut={signOutHandler}
                  userImg={userImg}
                  approvedUser={approvedUser}
                  storeList={storeList}
                  deleteStore={deleteStore}
                />
              )
            }}
          >
          </Route>
          <Route
            path='/manage/:id'
            component={() => {
              return ( 
                <StorePage 
                  StoreStock={StoreStock}
                  loggedIn={loggedIn}
                  signOut={signOutHandler}
                  userImg={userImg}
                  approvedUser={approvedUser}
                />
              )
            }}
          > 

          </Route>
        </Switch>
      </BrowserRouter>
    :
      <BrowserRouter className="App">
        <Switch> 
          <Route 
            exact
            path='/'
            component={() => { 
              return ( 
                <Login
                  approvedUser={approvedUser}
                />
              )
            }}
          >
          </Route>
          <Route 
            exact
            path='/store'
            component={Store}
          >
          </Route>
          <Route
            path='/addstock'
            component={AddStock}
          >
          </Route>
          <Route
            path='/'
            component={Stocks}
          >
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
