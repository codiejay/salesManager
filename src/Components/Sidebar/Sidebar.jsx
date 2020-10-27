import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = (props) => { 

  return ( 
    <div id='sideBar'> 
        <Link to='/addstock'>New Stock</Link>
        <Link to='/addstock'>New Store</Link>
        <Link to='/addstock'>History</Link>
        <Link to='/stocks'>Stocks</Link>
    </div>
  )
};

export default Sidebar;
