import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../Firebase';
import Sidebar from '../../Components/Sidebar/Sidebar';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import './Store.scss';
import { useState } from 'react';

const Store = (props) => { 

  let storeRef = firebase.firestore()
  .collection('approved')
  .doc(props.approvedUser)
  .collection('stock')

  useState(() => {
    let profit = 0;
    let len = 0;
    let mounted = false
    if (mounted){
    storeRef
      .where('stockQuantity', '>', 0)
      .get()
      .then(res => {
        res.docs.forEach(item => {
          len += item.data().stockQuantity;
        });
        setStockTotal(len);
      });
    
    storeRef
      .where('stockQuantity', '>', 0)
      .get()
      .then(doc => {
        doc.docs.forEach(item => { 
          profit += item.data().sellingPrice;
        })
        setProfit(profit);
      });
    }
    return () => mounted = true;
  },[])

  let [stockTotal, setStockTotal] = useState(0);
  let [profit, setProfit] = useState(0);
  return ( 
    props.loggedIn 
    ?
    <div id='storePage'>
      <LoggedInHeader 
        signOut={props.signOut}
        userImg= {props.userImg}
      />
      <div id='storeBody'>
        <Sidebar />
        { 
          <div className="storeMain">
            <div id='cashStatus'>
              <h3>{stockTotal}</h3>
              <p>Stocks Available</p>
            </div>

            <div id='cashStatus'>
              <h3>{profit.toLocaleString()}</h3>
              <p>Estimated Cash Return</p>
            </div>

        </div>
        }
      </div>
    </div>
    : 
    <Redirect to='/' />
  )
};

export default Store;