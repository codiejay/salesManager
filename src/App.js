import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login/Login';
import firebase from './Firebase';
import Store from './Pages/Store/Store';
import AddStock from './Pages/AddStock/AddStock';
import Stocks from './Pages/Stocks/Stocks';

const App = () => {
  

  let approvedUser = 'bolu';


  const PushItem = (item) => { 
    let dateClass = new Date();

    let fullDate = `${dateClass.getDate()} ${dateClass.getMonth()} ${dateClass.getFullYear()}`;

    firebase.firestore()
    .collection('approved')
    .doc(approvedUser)
    .collection('stock')
    .doc()
    .set({ 
      ...item, date: fullDate, id: `${dateClass.getTime()}`
    })
    .then(data => { 
        console.log('done')
        setaddedStock('Stock has been added successfully');
        setShowSucess(true);
        let success = setInterval(() => {
          setShowSucess(false);
          runThis()
        }, 3000);

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

  let [loggedIn, setLoggedIn] = useState(false);
  let [userImg, setUserImg] = useState('');
  let [cashTotal, setcashTotal] = useState(0);
  let [totals, setTotlas] = useState({ 
    cashTotal: 12000,
    cashReturn: 89503,
    cashProfit: 28990,
  });

  let [addedStock, setaddedStock] = useState('Stock has been added successfully');

  let [ShowSucess, setShowSucess] = useState(false);
  return (
    loggedIn 
    ?
      <BrowserRouter>
        <Route>
          <Redirect to='/stocks' />
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
                />
              )
            }}
          > 
          </Route>
          <Route 
            path='/stocks'
            component={() => { 
              return ( 
                <Stocks 
                  loggedIn={loggedIn}
                  signOut={signOutHandler}
                  userImg={userImg}
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
        </Switch>
        <Switch> 
          <Route 
            exact
            path='/store'
            component={Store}
          >
          </Route>
        </Switch>
        <Switch> 
          <Route 
            exact
            path='/addstock'
            component={AddStock}
          >
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
