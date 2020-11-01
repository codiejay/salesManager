import React, { useState } from 'react';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Manage.scss';
import { 
  Link
} from 'react-router-dom'

const Manage = (props) => { 

  const deleteStore = (e) => { 
    props.deleteStore(e.target.id);
  }

  let [storeClick, setStoreClicked] = useState('');
  return ( 
    <div className="managePage">
      <LoggedInHeader 
        signOut={props.signOut}
        userImg= {props.userImg}
      />

      <div className="managePageBody">
        <Sidebar />

        <div className="managePageMain">
          <div id='storeList' >
          { 
            props.storeList.map((item, index) => { 
              return ( 
                <div className="Store" key={index}>
                  <Link 
                  to={`/manage/${item.storeName}`}
                  id='Store'
                  >
                  <div></div>
                  <p>{item.storeName}</p>
                  </Link>
                  <div 
                    id={item.storeName}
                    className="bin"
                    onClick={deleteStore}
                  >
                  </div>
                </div>
              )
            }) 
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage;