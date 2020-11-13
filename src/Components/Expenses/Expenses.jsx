import React from 'react';
import './Expenses.scss'

const Expenses = (props) => { 

  return ( 
    <div className="expenses">

      <div className="details">
        <div className="expenseHead">
          <h3>{props.attendant}</h3>
          <h3>{`₦${props.cost}`}</h3>
        </div>
        <h1>{props.expenseTitle}</h1>
        <p> {props.expenseBody} </p>

        <div className="time">
          <p>{props.expenseDate}</p>
          <p>{props.expenseTime}</p>
        </div>
      </div>

      <div 
        id={props.id}
        className="delBttn"
        onClick={props.deleteExpense}
      >
      </div>
    </div>
  )
}

export default Expenses