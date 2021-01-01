import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import firebase from '../../Firebase'; 
import './SoldStock.scss';

const SoldStock = (props) => { 

  let dateClass = new Date();
  let currentDate = `${dateClass.getDate()} ${dateClass.getMonth()+1} ${dateClass.getFullYear()}`
  let id = useParams().id;
  let oldSalesDate = (window.location.href.split('%').join(' ').split('/'));

  let oldDate = oldSalesDate.pop().split('.').join(' ');

  let isOldSale  = (oldSalesDate.indexOf('old') === -1) ? false : true; 

  const stockRef = firebase.firestore()
  .collection('approved')
  .doc(props.approvedUser)
  .collection('store')
  .doc(props.storeName)
  .collection('transactions')
  .doc(isOldSale ? oldDate : currentDate)
  .collection('sales');

  let imieRef = firebase
    .firestore()
    .collection('approved')
    .doc(props.approvedUser)
    .collection('imei')

  const deleteSales = () => {
    let locationRef = window.location.href.split('/').length-2;
    let storeName = window.location.href.split('/')[locationRef];
    setStoreName(storeName);
    stockRef
      .where('id', '==', parseInt(id))
      .get()
      .then((querySnap) => {
        querySnap.forEach(item => { 
          item.ref.delete()
          .then(() => {
            firebase.firestore()
              .collection('approved')
              .doc(props.approvedUser)
              .collection('store')
              .doc(props.storeName)
              .collection('stocks')
              .doc(stock.stockName.toLowerCase())
              .get()
              .then(doc => { 
                doc.ref.update({ 
                  stockQuantity: firebase.firestore.FieldValue.increment(stock.stockQuantity)
                })
                .then(() => {
                  imieRef
                  .where('imei', '==', stock.imei)
                  .get()
                  .then((res) => {
                    res.forEach(item => { 
                      item.ref.delete()
                      .then(() => { 
                        setValid(false)
                      })
                    })
                  })
                })

              })
          })
        })
      })
  }

  useEffect(() => {
    firebase.firestore()
      .collection('approved')
      .doc(props.approvedUser)
      .collection('store')
      .doc(props.storeName)
      .collection('transactions')
      .doc(isOldSale ? oldDate : currentDate)
      .collection('sales')
      .where('id', '==', parseInt(id))
      .get()
      .then(d => {
        d.docs.forEach(item => {
          setStock(item.data())
        })
      })
  }, [])

  let [stock, setStock] = useState();
  let [valid, setValid] = useState(true);
  let [storeName, setStoreName] = useState('');
  console.log(oldDate);
  return ( 
    valid ?
    <div id='soldstockpage'>
      <LoggedInHeader 
        signOut={props.signOut}
        userImg= {props.userImg}
      />
      { 
        stock ? 
        <div className="soldstockMain">

        <div className="details" data-print='noPrint'>
          <div className="itemDetails">
            <div className="itemDetailsHeader">
              <h3 className="label">
                Item Details
              </h3>
              <div 
                onClick={deleteSales}
                className="del"
              >
              </div>
            </div>
            <div className="detailItems">
              <div className="inputItems">
                <label htmlFor='stockName'>Stock Name</label>
                <input 
                  id='stockName'
                  data-fill='false'
                  value={stock.stockName}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='attendant'>Attendant</label>
                <input 
                  id='attendant'
                  data-fill='false'
                  value={stock.staffInCharge}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='Quantity'>Quantity</label>
                <input 
                  id='Quantity'
                  data-fill='false'
                  value={stock.stockQuantity}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='sellingPrice'>Selling Price</label>
                <input 
                  id='sellingPrice'
                  data-fill='false'
                  value={stock.sellingPrice}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='purchasePrice'>Purchase Price</label>
                <input 
                  id='purchasePrice'
                  data-fill='false'
                  value={stock.purchasePrice}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='totalPrice'>Total Price</label>
                <input 
                  id='totalPrice'
                  data-fill='false'
                  value={stock.totalAmount}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='totalPrice'>IMEI</label>
                <input 
                  id='IMEI'
                  data-fill='false'
                  value={stock.imei}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='dateofsale'>Date Of Sale</label>
                <input 
                  id='dateofsale'
                  data-fill='false'
                  value={!isOldSale ? currentDate.split(' ').join('/') : oldDate.split(' ').join('/')}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='timesold'>Time Sold</label>
                <input 
                  id='dateofsale'
                  data-fill='false'
                  value={stock.time}
                />
              </div>
            </div>

            <h3 className="label" style={{marginTop: '3em'}} >
              Customer Details
            </h3>

            <div id="detailItems">
              <div className="inputItems">
                <label htmlFor='customerName'>Customer Name</label>
                <input 
                  id='customerName'
                  data-fill='false'
                  value={stock.customerName}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='customerAddress'>Customer Address</label>
                <input 
                  id='customerAddress'
                  data-fill='false'
                  value={stock.customerAddress}
                />
              </div>

              <div className="inputItems">
                <label htmlFor='customerPhoneNumber'>Customer Phone No.</label>
                <input 
                  id='stoccustomerPhoneNumberkName'
                  data-fill='false'
                  value={stock.customerPhoneNumber}
                />
              </div>

            </div>

          </div>
        </div>

        <div className="printWindow">
          <div className="header">
            <h1>Leumastek Phones</h1>
            <h3> {props.storeName} branch </h3>
            <h3>FOR INQUIRES, PLEASE CALL <br></br> 070-8162-1699</h3>
            <h5><b>Date: </b>{stock.date.split(' ').join('/')}</h5>
            <h5><b>Time: </b>{stock.time}</h5>
            <h5 style={{textTransform: 'capitalize'}}><b>Customer Name: </b>{stock.customerName}</h5>
            <h5><b>imei: </b>{stock.imei}</h5>
          </div>
            <div className="details">
              <div className="top">
                <p>Goods Bought</p>
                <p>Qty</p>
                <p>Unit Price</p>
              </div>
              <div className="data">
                <h3> {stock.stockName} </h3>
                <h3> {stock.stockQuantity} </h3>
                <h3> {stock.sellingPrice.toLocaleString()} </h3>
              </div>

              <div className="total">
                <h2>Total:</h2>
                <h2>{stock.totalAmount.toLocaleString()}</h2>
              </div>

              <p 
                id='note'
              >
                NB: Customers are advised to check their goods properly before acceptance as we take no responsibility of acceptance of returned goods. Goods sold in good condition are not returnable.
                No refund of money after payment.
            </p>
            <p 
              id='note'
              style={{ 
                marginTop: '20px',
                textTransform: 'capitalize'
              }}
            >
              Attendant: {stock.staffInCharge}
            </p>

            </div>

            <button
              onClick={() => {
                window.print()
              }}
            >
              <div id='printer'></div>
              Print Receipt
            </button>
        </div>
      </div>
      : 
      <h2 
        style={{
          textAlign: 'center', 
          background: '#1A1C23', 
          color: '#fff',
          textTransform: 'uppercase'
        }} 
        data-print='noPrint'
      >
        fetching data
      </h2>
      }

    </div>
    : 
    <Redirect to={`/manage/${storeName}`} />
  )
}

export default SoldStock;