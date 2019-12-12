import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../expense/ExpenseForm";
import { addExpense } from "../../store/actions/expensesAction";

const AddExpensePage = ({ dispatch, history }) => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={expense => {
          dispatch(addExpense(expense));
          history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
