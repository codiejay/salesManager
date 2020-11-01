import React, { useState } from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = (props) => { 

  const addCurrentBttn = (e) => { 
    console.log()
  }
  

  let [currentBttn , setcurrentBttn] = useState(window.location.href.split('/')[3])
  return ( 
    <div 
      id='sideBar'
    > 
        <Link 
          onClick={addCurrentBttn} 
          id={(currentBttn === 'addstock') ? 'currentBttn' : ''}
          to='/addstock'
          data-name='newstock'
        >
            New Stock
        </Link>
        <Link 
          to='/addstore'
          onClick={addCurrentBttn} 
          id={(currentBttn === 'addstore') ? 'currentBttn' : ''}
          data-name='newstore'
        >
          New Store
        </Link>
        <Link 
          onClick={addCurrentBttn} 
          to='/manage'
          id={(currentBttn === 'manage') ? 'currentBttn' : ''}
          data-name='manage'
        >
          Manage
        </Link>
        <Link 
          onClick={addCurrentBttn} 
          to='/stocks'
          id={(currentBttn === 'stocks') ? 'currentBttn' : ''}
          data-name='stocks'
        >
          Stocks
        </Link>
    </div>
  )
};

export default Sidebar;
