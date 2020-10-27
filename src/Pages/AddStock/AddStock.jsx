import React from 'react';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import { Redirect } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './AddStock.scss';
import { useState } from 'react';
import firebase from '../../Firebase';
import { useEffect } from 'react';

const AddStock = (props) => { 


  const formSubmitted = (e) => { 
    e.preventDefault();

    if(newStock.stockName) { 
      props.PushItem(newStock);
    }
  };

  //edit this to commit murder
  //
  // const Updatebutton = (e) => { 
  //   if(newStock.stockName &&
  //     newStock.stockQuantity && 
  //     newStock.stockWatchQuantity &&
  //     newStock.stockSelling &&
  //     newStock.stockPrice
  //     // newStock.userPin.length > 4
  //     ) { 

  //       setbuttonState({...buttonState, buttonState: 'regularButton'})
  //       props.PushItem(newStock)
  //     }

  //     else {
  //       setbuttonState({...buttonState, buttonState: 'fadedButton'})
  //     }
  // }

  const InputChangeHandler = (e) => { 
    
    switch(e.target.id) { 
      case 'itemName': 
        setnewStock({...newStock, stockName: `${e.target.value}`});
        break;
      case 'itemQuantity':
        setnewStock({...newStock, stockQuantity: `${e.target.value}`});
        break;
      case 'watchQuantity': 
        setnewStock({...newStock, stockWatchQuantity: `${e.target.value}`});
        break;
      case 'salesPrice': 
        setnewStock({...newStock, stockPrice: `${e.target.value}`});
        break;
        case 'sellingPrice': 
          setnewStock({...newStock, stockSelling: `${e.target.value}`});
          break;
      // case 'pin': 
      // setnewStock({...newStock, userPin: `${e.target.value}`});
      // break;
    }
  }


  let [buttonState, setbuttonState] = useState({
    buttonState: 'regularButton',
    buttonClick: 'formSubmitted'
  });

  let [newStock, setnewStock] = useState({ 
    stockName: '',
    stockQuantity: 0,
    stockWatchQuantity: 0,
    stockSelling: 0,
    stockPrice: 0,
    // userPin: '',
  });

  let [stockAdded, setStockAdded] = useState(props.addedStock);

  let [ShowSucess, setShowSucess] = useState(props.ShowSucess);
  return ( 
    props.loggedIn 
    ?
    <div id='addStockPage'>
      <LoggedInHeader 
        signOut={props.signOut}
        userImg= {props.userImg}
      />
      <div id='addStockBody'>
        <Sidebar />
        <div className="addStockMain">
          <div id='header'>
            <p className='heading'>add new item to store</p>
            <div 
              className= 'postStatus'
              style={{ 
                opacity: `${props.ShowSucess ? '1' : '0'}`
              }}
            >
              <div 
                className={(stockAdded[0] === 'S') ? 'success' : 'error'}
              ></div>
              <p>
                {stockAdded}
              </p> 
            </div>
          </div>
          <form onSubmit={formSubmitted}>
            <div className="formContent">
              <div>
                <label htmlFor='itemName'>item's name</label>
                <input
                  onChange={InputChangeHandler} 
                  type="text"
                  id='itemName'
                  placeholder='techno 2020'
                />
              </div>
              
              <div>
                <label htmlFor='itemQuantity'>item's quantity</label>
                <input 
                  onChange={InputChangeHandler} 
                  type="number"
                  id='itemQuantity'
                  placeholder='30'
                />
              </div>

              <div>
                <label htmlFor='watchQuantity'>watch quantity</label>
                <input 
                  type="number"
                  onChange={InputChangeHandler} 
                  id='watchQuantity'
                  placeholder='4'
                />
              </div>

              <div>
                <label htmlFor='salesPrice'>sales price</label>
                <input 
                  onChange={InputChangeHandler} 
                  type="number"
                  id='salesPrice'
                  placeholder='sales price'
                  maxLength='8'
                />
              </div>

              <div>
                <label htmlFor='sellingPrice'>selling price</label>
                <input 
                  onChange={InputChangeHandler} 
                  type="number"
                  id='sellingPrice'
                  placeholder='selling price'
                  maxLength='8'
                />
              </div>

              {/* <div>
                <label htmlFor='pin'>your pin </label>
                <input 
                  onChange={InputChangeHandler} 
                  type="number"
                  id='pin'
                  placeholder='90998777'
                  value={newStock.userPin}
                  maxLength='8'
                />
              </div> */}
            </div>
            <button 
              className={buttonState.buttonState}
            >
              add to store
            </button>
          </form>
        </div>
      </div>
    </div>
    : 
    <Redirect to='/'/>
  )
}

export default AddStock;