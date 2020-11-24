import React, { useEffect } from 'react';
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

  useEffect(() => {
    let profit = 0;
    let len = 0;
    let mounted = true

    storeRef
      .where('stockQuantity', '>', 0)
      .get()
      .then(res => {
        res.docs.forEach(item => {
          len += item.data().stockQuantity;
        });
        if(mounted) { 
          setStockTotal(len);
        }
      });
    
    storeRef
      .where('stockQuantity', '>', 0)
      .get()
      .then(doc => {
        doc.docs.forEach(item => { 
          profit += item.data().sellingPrice;
        })
        if(mounted) { 
          setProfit(profit);
        }
      });

    return () => mounted = false;
  },[])

  let [stockTotal, setStockTotal] = useState('loading');
  let [profit, setProfit] = useState('loading');
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