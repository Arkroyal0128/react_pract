import React from "react";
import Expense from "./components/Expense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, `Let's get started!`),
  //   React.createElement(Expense, { items: expenses })
  // );
  // 아래의 JSX가 이 코드로 변환됨.
  // return 할때 하나만 할 수 있기 때문에 wraping element가 필요했었던 것임.

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense data={expenses} />
    </div>
  );
}

export default App;
