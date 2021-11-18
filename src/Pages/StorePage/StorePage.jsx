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
          storeRef
            .get().then(d => {
              let mainStockQuantity = d.data().stockQuantity;
              if(mainStockQuantity >= parseInt(newValue) - parseInt(stockCurrentQuantity)) { 
                storeStockRef.update({ 
                  stockQuantity: newValue
                })
                storeRef.update({ 
                  stockQuantity: mainStockQuantity-parseInt(newValue - stockCurrentQuantity)
                })
              }
              else { 
              console.log('it got here')
                
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
                  stockQuantity: doc.data().stockQuantity + parseInt(newValue - stockCurrentQuantity )
                });
                storeStockRef.update({ 
                  stockQuantity: newValue,
                })
              }
            })
        }
      }
    }
  }

  const overViewChanged = (e) => {
    setOverViewDate(e.target.value);
    let mainDate = e.target.value.split('-').reverse().join(' ');
    if(parseInt(mainDate[0]) === 0) { 
      mainDate = mainDate.substring(1);
    };
    let prefixDate = mainDate.split(' ');
    if(parseInt(prefixDate[1][0]) === 0) { 
      prefixDate[1] = prefixDate[1][1];
    }
    mainDate = prefixDate.join(' '); 
    console.log(prefixDate);
    setShowOverViewData(true);
    let arr = [];
    let profit = 0;
    //Get sales
    setOverviewExpenses([]);
    firebase.firestore()
    .collection('approved')
    .doc(props.approvedUser)
    .collection('store')
    .doc(id.toLowerCase())
    .collection('transactions')
    .doc(mainDate)
    .collection('sales')
    .get()
    .then(res => { 
      res.docs.forEach(item => {
        profit += item.data().totalAmount
        arr.push(item.data())
      })
      setOverViewProfit(profit);
      setOverviewSales([...arr]);
      profit = 0;
      arr = [];
    });

    //get expenses
    firebase.firestore()
    .collection('approved')
    .doc(props.approvedUser)
    .collection('store')
    .doc(id.toLowerCase())
    .collection('transactions')
    .doc(mainDate)
    .collection('expenses')
    .get()
    .then(res => { 
      res.docs.forEach(item => {
        arr.push(item.data())
      })
      setOverviewExpenses([...arr]);
      arr = [];
    })
  };

  const overViewOptions = (e) => {
    let text = e.target.textContent.toLowerCase();

    if(text === 'expenses') { 
      setOverViewStatus('expenses')
    }
    else { 
      setOverViewStatus('sales')
    }
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
        setView('expenses');
        break;

      case 'overview':
        setView('overview');
        break;

    }
  }

  useEffect(() => {
    let overViewCurrentDate = `${dateClass.getFullYear()}-${dateClass.getMonth()+1}-${dateClass.getDate()}`;
    let mounted = true;
    setOverViewDate(overViewCurrentDate);
    props.setCurrentStore(id);

    let salesArr = [];
    let stocksArr = [];
    let expensesArr = [];
    let profit = 0;
    //getting length of available stock 
    let length = 0;
    firebase.firestore()
      .collection('approved')
      .doc(props.approvedUser)
      .collection('store')
      .doc(id)
      .collection('stocks')
      .where('stockQuantity', '>', 0)
      .get()
      .then(doc => {
        doc.docs.forEach(item => { 
          length += item.data().stockQuantity;
        });
        if(mounted) { 
          setStockTotal(length);
        }
      });

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
        if(mounted) { 
          setAvailablesStock([...stocksArr]);
          stocksArr = [];
        }

      });


      firebase.firestore()
        .collection('approved')
        .doc(props.approvedUser)
        .collection('store')
        .doc(id.toLowerCase())
        .collection('transactions')
        .doc(currentDate)
        .collection('sales')
        .get()
        .then(res => { 
          res.forEach((item) => {
            profit += item.data().totalAmount
            salesArr.push(item.data());
          })
          if(mounted) { 
            setProfit(`₦${profit.toLocaleString()}`);
            profit = 0;
            setSales([...salesArr]);
            salesArr=[];
          }
        });


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
          if(mounted) {
            setExpenses([...expensesArr]);
            expensesArr=[];
          }
        });

        return () => {mounted = false}
  }, [0])

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


  let [availablesStock, setAvailablesStock] = useState([]);
  let [view, setView] = useState();
  let [sales, setSales] = useState([]);
  let [expenses, setExpenses] = useState([]);
  let [profit, setProfit] = useState(0);
  let [overViewDate, setOverViewDate] = useState();
  let [overviewSales, setOverviewSales] = useState([]);
  let [overviewExpenses, setOverviewExpenses] = useState([]);
  let [overViewStatus, setOverViewStatus] = useState('sales');
  let [showOverViewData, setShowOverViewData] = useState(false);
  let [overViewProfit, setOverViewProfit] = useState(0);
  let [stockTotal, setStockTotal] = useState(0);
  let [availableStockTotalCost, setAvailableStockTotalCost] = useState({ 
    sellingTotal: 0,
    purchaseTotal: 0,
  })

  useEffect(() => {
    availablesStock.filter((item) => {return item.stockQuantity > 1}).map((item) => {
      
      setAvailableStockTotalCost({ 
        purchaseTotal: availableStockTotalCost.purchaseTotal += item.purchasePrice,
        sellingTotal: availableStockTotalCost.sellingTotal += item.sellingPrice
      })
    })
    
  }, [JSON.stringify(availablesStock)])
  
  useEffect(() => {console.log(availableStockTotalCost)},[])

  return (  
    <div className='StorePage'>
      <LoggedInHeader 
        signOut={props.signOut}
        userImg= {props.userImg}
      />

      <div className='storePageBody'>
        <Sidebar />
        <div className='storePageMain'>
          <div className='header'>
            <h1>{id}</h1>
            { 
              props.admin 
              ? 
              <>
                <h3 style={{ 
                  color: 'white',
                  fontSize: '1.em',
                  marginBottom: '1em'
                }}
                >
                  Selling Total: {availableStockTotalCost.sellingTotal.toLocaleString()}
                </h3>
                <h3 style={{ 
                  color: 'white',
                  fontSize: '1.em',
                  marginBottom: '1em'
                }}
                >
                  Purchase Total: {availableStockTotalCost.purchaseTotal.toLocaleString()}
                </h3>
                <h3 style={{ 
                  color: 'white',
                  fontSize: '1.em',
                  marginBottom: '1em'
                }}
                >
                  Today's Profit: {profit}
                </h3>
              </>
              
              : 
              ''
            }
            <h3 style={{ 
              color: 'white',
              fontSize: '1.em',
              marginBottom: '2em'
            }}
            >
              Stock Available: {stockTotal}
            </h3>
            <div className='options'>
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
              <p 
                id='overview'
                onClick={optionClicked}
                style={{
                  opacity: `${(view === 'overview') ? '1' : '0.2'}`
                }}
              >
                overview
              </p>
            </div>
          </div>

          <div 
            style={{
              display: `${(view === 'allStocks') ? 'block' : 'none'}`
            }}
            className='allStocks'
          >
            { 
              availablesStock.map((item, index) => { 
                // setAvailableStockTotalSellingCost(availableStockTotalSellingCost+item.sellingPrice)
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
                      id={item.stockQuantity} className='done'
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
            className='sales'
          >
          <div className='top'>
            <h3>Item Name</h3>
            <h3>Item Quantity</h3>
            <h3>Updated Date</h3>
          </div>
            { 
              sales.length > 0 
              ? 
                sales.map((item, index) => { 
                  return ( 
                    <StockItem 
                      key={index}
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
            className='expense'
          >
            { 
              expenses.length > 0 
              ? 
                expenses.map((item, index) => { 
                  return ( 
                    <Expenses 
                      key={index}
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

          <div 
            className='overview'
            style={{ 
              display: `${view === 'overview' ? 'block' : 'none'}`
            }}
          >
            <form>
              <input 
                max={`${dateClass.getFullYear()}-${dateClass.getMonth()+1}-${dateClass.getDate()}`}
                min='2020-11-15'
                type='date' 
                value={overViewDate ? overViewDate : ''}
                onChange={overViewChanged}
              />
            </form>

            <div 
              style={{
                display: `${showOverViewData ? 'block' : 'none'}`
              }}
              className="OverViewData"
            >
            <div className="profit">
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
                  marginBottom: '1em',
                  borderRadius: '300px'
                }}
              >
                {overViewDate} Cash At Hand: ₦{overViewProfit.toLocaleString()}
              </h1>
            </div>
            
              <div 
                id='overViewSales'
                style={{ 
                  display: `${overViewStatus === 'sales' ? 'block' : 'none'}`
                }}
              > 
                <div className='top'>
                  <h3>Item Name</h3>
                  <h3>Item Quantity</h3>
                  <h3>Updated Date</h3>
                </div>
                { 
                overviewSales.length > 0 
                ? 
                  overviewSales.map((item, index) => { 
                    return ( 
                      <StockItem 
                        key={index}
                        location={id}
                        itemId={`/${item.id}/old/${item.date.split(' ').join('.')}`}
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
              { 
                overviewExpenses.length > 0 
                ? 
                  overviewExpenses.map((item) => { 
                    return ( 
                      <div>
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
                          marginBottom: '1em',
                          borderRadius: '300px'
                        }}
                      >
                        {overViewDate} Expenses
                      </h1>
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
                      </div>

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
      </div>
    </div>

  )
}

export default StorePage;