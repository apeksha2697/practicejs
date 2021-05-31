import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [item, setTitle] = useState(props.item);

  const clickHandler =() => {
    setTitle('updated!!');
    console.log(item);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
    <div className="expense-item__description">
        <h2>{item}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
    </div>
    </Card>
  );
        
    
}

export default ExpenseItem;
