import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

// 꼭 props로 써야하는것은 아닌데 보통 props라고 씀
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("uupddate");
    console.log(title);
  };
  const clickHandler2 = () => {
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>click me</button>
      <button onClick={clickHandler2}>click2 me</button>
    </Card>
  );
}

export default ExpenseItem;
