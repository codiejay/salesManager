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

const App = () => {
  

  let approvedUser = 'bolu';
  let userName = firebase.auth().currentUser;
  
  //functions for stockPage
  const redirectStockPageHandler = (event) => { 
    setRedirectStockPage(event);
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
        setaddStockBttn('done');
        console.log('done')
        setaddedStock('Stock has been added successfully');
        setShowSucess(true);
        let success = setInterval(() => {
          setShowSucess(false);
          setaddStockBttn('add to store');
          runThis()
        }, 1500);

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
  }
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

  return (
    loggedIn 
    ?
      <BrowserRouter>
        <Route>
          <Redirect to='/addstore' />
        </Route> 
        <Switch>
          <Route 
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
