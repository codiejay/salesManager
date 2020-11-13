import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import firebase from '../../Firebase'; 
import './SoldStock.scss';

const SoldStock = (props) => { 


  let dateClass = new Date()
  let currentDate = `${dateClass.getDate()} ${dateClass.getMonth()+1} ${dateClass.getFullYear()}`
  let id = useParams().id;

  const stockRef = firebase.firestore()
  .collection('approved')
  .doc(props.approvedUser)
  .collection('store')
  .doc(props.storeName)
  .collection('transactions')
  .doc(currentDate)
  .collection('sales');

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
                  setValid(false)
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
      .doc(currentDate)
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
  let [storeName, setStoreName] = useState('')
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

        <div className="details">
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
                  value={currentDate.split(' ').join('/')}
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

        </div>
      </div>
      : 
      <h2>fetching data</h2>
      }

    </div>
    : 
    <Redirect to={`/manage/${storeName}`} />
  )
}

export default SoldStock;