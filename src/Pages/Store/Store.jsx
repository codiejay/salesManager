import React from 'react';
import { Redirect } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import './Store.scss';


const Store = (props) => { 

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
          props.admin 
          ? 
          <div className="storeMain">
          <div id='cashStatus'>
            <h3>{props.cashTotal}</h3>
            <p>Today's sales in cash</p>
          </div>

          <div id='cashStatus'>
            <h3>{props.cashReturn}</h3>
            <p>Expected Cash Return</p>
          </div>

          <div id='cashStatus'>
            <h3>{props.cashProfit}</h3>
            <p>Expected Profit</p>
          </div>
        </div>
        : 
        ''
        }
      </div>
    </div>
    : 
    <Redirect to='/' />
  )
};

export default Store;