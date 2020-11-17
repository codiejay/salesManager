import React, { useState } from 'react';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './StorePage.scss';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import firebase from '../../Firebase'
import StockItem from '../../Components/StockItem/StockItem';
import Expenses from '../../Components/Expenses/Expenses';

const StorePage = (props) => {

  let id = useParams().id;
  let dateClass = new Date()
  let currentDate = `${dateClass.getDate()} ${dateClass.getMonth()+1} ${dateClass.getFullYear()}`
  const storeExpenseRef =  firebase.firestore()
    .collection('approved')
    .doc(props.approvedUser)
    .collection('store')
    .doc(id.toLowerCase())
    .collection('transactions')
    .doc(currentDate)
    .collection('expenses')


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
              if(mainStockQuantity >= parseInt(newValue)) { 
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
              else { 
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

    let elem = e.target.id;
    switch(elem) { 
      case 'stocks': 
        setView('allStocks');
        break;
      case 'sales':
        setView('sales');
        break;
      case 'expenses': 
        setView('expenses')
    }
  }

  useEffect(() => {
    props.setCurrentStore(id);

    let salesArr = [];
    let stocksArr = [];
    let expensesArr = [];
    let profit = 0;
    firebase.firestore()
      .collection('approved')
      .doc(props.approvedUser)
      .collection('store')
      .doc(id)
      .collection('stocks')
      .onSnapshot(data => {
        data.docs.forEach(item => {
          stocksArr.push(item.data())
        })
        setAvailablesStock([...stocksArr]);
        stocksArr = [];
      })

      firebase.firestore()
        .collection('approved')
        .doc(props.approvedUser)
        .collection('store')
        .doc(id.toLowerCase())
        .collection('transactions')
        .doc(currentDate)
        .collection('sales')
        .onSnapshot(res => { 
          res.forEach((item) => {
            profit += item.data().totalAmount
            salesArr.push(item.data());
          })
          setProfit(`₦${profit.toLocaleString()}`);
          profit = 0;
          setSales([...salesArr]);
          salesArr=[];
        })


        firebase.firestore()
        .collection('approved')
        .doc(props.approvedUser)
        .collection('store')
        .doc(id.toLowerCase())
        .collection('transactions')
        .doc(currentDate)
        .collection('expenses')
        .onSnapshot(res => { 
          res.forEach((item) => { 
            expensesArr.push(item.data());
          })
          setExpenses([...expensesArr]);
          expensesArr=[];
        })
  }, [])

  //delete expenses 
  const deleteExpenses = (item) => { 
    storeExpenseRef
    .where('id', '==', item)
    .get()
    .then((querySnapShot) => { 
      querySnapShot.forEach(item => { 
        item.ref.delete()
      })
    })
  }


  //delete sold stock
  const deleteSoldStock = (itemId) => { 
    console.log('you are about to delete a sold stock')
  }

  let [availablesStock, setAvailablesStock] = useState([]);
  let [view, setView] = useState('allStocks');
  let [sales, setSales] = useState([]);
  let [expenses, setExpenses] = useState([]);
  let [profit, setProfit] = useState(0);


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
            { 
              props.admin 
              ? 
              <h3 style={{ 
                color: 'white',
                fontSize: '1.em',
                marginBottom: '2em'
              }}
              >
                Today's Profit: {profit}
              </h3>
              : 
              ''
            }
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
              <p 
                id='expenses'
                onClick={optionClicked}
                style={{
                  opacity: `${(view === 'expenses') ? '1' : '0.2'}`
                }}
              >
                today expenses
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
          <div className="top">
            <h3>Item Name</h3>
            <h3>Item Quantity</h3>
            <h3>Updated Date</h3>
          </div>
            { 
              sales.length > 0 
              ? 
                sales.map((item) => { 
                  return ( 
                    <StockItem 
                      location={id}
                      itemId={`/${item.id}`}
                      itemName={item.stockName}
                      itemQuantity={item.stockQuantity}
                      lastUpdate={item.date}
                      itemLastUpdate='0'
                    />
                  )
                })
              : 
              <h1 
                style={{ 
                  color: 'white',
                  fontSize: '1em',
                  textTransform: 'uppercase',
                  width: 'fit-content',
                  padding: '0.5em 0.9em',
                  backgroundColor: 'white',
                  color: 'black',
                  marginTop: '2em',
                  borderRadius: '300px'
                }}
              >
                no sales to display
              </h1>
            }
          </div>

          <div 
            style={{
              display: `${(view === 'expenses') ? 'block' : 'none'}`
            }}
            className="expense"
          >
            { 
              expenses.length > 0 
              ? 
                expenses.map((item) => { 
                  return ( 
                    <Expenses 
                      cost={item.expenses.cost}
                      attendant={item.attendant}
                      expenseTitle={item.expenses.title}
                      expenseBody={item.expenses.body}
                      expenseDate={item.date}
                      expenseTime={item.time}
                      id={item.id}
                      deleteExpense={() => {
                        return deleteExpenses(item.id)
                      }}
                    />
                  )
                })
              : 
              <h1 
                style={{ 
                  color: 'white',
                  fontSize: '1em',
                  textTransform: 'uppercase',
                  width: 'fit-content',
                  padding: '0.5em 0.9em',
                  backgroundColor: 'white',
                  color: 'black',
                  marginTop: '2em',
                  borderRadius: '300px'
                }}
              >
                no expenses to display
              </h1>
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default StorePage;