import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expense.css";

function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
    </Card>
  );
}

export default Expense;
