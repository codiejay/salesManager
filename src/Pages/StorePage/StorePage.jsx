import React, { useState } from 'react';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './StorePage.scss';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import firebase from '../../Firebase'

const StorePage = (props) => {

  let id = useParams().id;

  //doneBttnClicked
  const doneBttnClicked = (e) => {
    let stockCurrentQuantity = parseInt(e.target.id);
    let newValue = parseInt(e.target.previousElementSibling.value);
    let elemName = e.target.dataset.name;

    let storeRef = firebase.firestore()
      .collection('approved')
      .doc(props.approvedUser)
      .collection('stock')
      .doc(elemName.toLowerCase())
    
    let storeStockRef = firebase.firestore()
    .collection('approved')
    .doc(props.approvedUser)
    .collection('store')
    .doc(id)
    .collection('stocks')
    .doc(elemName.toLowerCase())


    if(newValue >= 0) { 
      if(newValue !== stockCurrentQuantity) { 
        if(newValue > stockCurrentQuantity) { 
          storeRef.get()
            .then(d => {
              let mainStockQuantity = d.data().stockQuantity;
              if(mainStockQuantity > parseInt(newValue)) { 
                storeStockRef.update({ 
                  stockQuantity: newValue
                })
                storeRef.update({ 
                  stockQuantity: mainStockQuantity-parseInt(newValue - stockCurrentQuantity)
                })
              }
            })
        }
        else if(newValue < stockCurrentQuantity) { 
          storeRef.get()
            .then(doc => {
              if(newValue < doc.data().stockQuantity) { 
                storeRef.update({ 
                  stockQuantity: doc.data().stockQuantity + parseInt(newValue + stockCurrentQuantity )
                });
                storeStockRef.update({ 
                  stockQuantity: newValue,
                })

              }
            })
        }
      }
    }
    else console.log('nothign was inputed')
  }
  //optionsClicked
  const optionClicked = (e) => {
    console.log(e.target);
    let elem = e.target.id;
    switch(elem) { 
      case 'stocks': 
        setView('allStocks');
        break;
      case 'sales':
        setView('sales');
        break;
    }
  }

  useEffect(() => {
    let newArr = [];
    firebase.firestore()
      .collection('approved')
      .doc(props.approvedUser)
      .collection('store')
      .doc(id)
      .collection('stocks')
      .onSnapshot(data => {
        data.docs.forEach(item => {
          newArr.push(item.data())
        })
        setAvailablesStock([...newArr]);
        newArr = [];
      })
  }, [])

  let [availablesStock, setAvailablesStock] = useState([]);
  let [view, setView] = useState('allStocks');
  let [sales, setSales] = useState([]);
  return ( 
    <div className="StorePage">
      <LoggedInHeader 
        signOut={props.signOut}
        userImg= {props.userImg}
      />

      <div className="storePageBody">
        <Sidebar />
        <div className="storePageMain">
          <div className="header">
            <h1>{id}</h1>
            <h3 style={{ 
              color: 'white',
              fontSize: '1.em',
              marginBottom: '2em'
            }}
            >
              Today's Profit: 56000
            </h3>
            <div className="options">
              <p 
                id='stocks'
                onClick={optionClicked}
                style={{
                  opacity: `${(view === 'allStocks') ? '1' : '0.2'}`
                }}
              >
                current stocks
              </p>
              <p 
                id='sales'
                onClick={optionClicked}
                style={{
                  opacity: `${(view === 'sales') ? '1' : '0.2'}`
                }}
              >
                today sales
              </p>
            </div>
          </div>

          <div 
            style={{
              display: `${(view === 'allStocks') ? 'block' : 'none'}`
            }}
            className="allStocks"
          >
            { 
              availablesStock.map((item, index) => { 
                return ( 
                  <div
                    id='storeStockItem'
                    key={index}
                  >
                    <h3>{item.stockName}</h3>
                    <input 
                      type='number'
                      id='input'
                      placeholder={item.stockQuantity} 
                    />
                    <div 
                      data-name={item.stockName}
                      id={item.stockQuantity} className="done"
                      onClick={doneBttnClicked}
                    >

                    </div>
                  </div>
                )
              })
            }
          </div>

          <div 
            style={{
              display: `${(view === 'sales') ? 'block' : 'none'}`
            }}
            className="sales"
          >
            { 
              sales.length > 0 
              ? 
                sales.map((item) => { 
                  return ( 
                    <h1>getting sales</h1>
                  )
                })
              : 
              <h1 
                style={{ 
                  color: 'white',
                  fontSize: '1em',
                  textTransform: 'uppercase'
                }}
              >
                no sales to display
              </h1>
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default StorePage;