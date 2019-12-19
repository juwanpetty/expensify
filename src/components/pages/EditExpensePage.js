import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../expense/ExpenseForm";
import { editExpense, removeExpense } from "../../store/actions/expensesAction";

const EditExpensePage = props => {
  const removeItem = () => {
    const id = props.expense.id;

    props.dispatch(removeExpense({ id }));
    props.history.push("/");
  };

  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button onClick={() => removeItem()}>Remove</button>
    </div>
  );
};

const mapStateToProp = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProp)(EditExpensePage);
