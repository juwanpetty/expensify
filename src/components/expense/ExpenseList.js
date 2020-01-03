import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "../expense/ExpenseListItem";
import selectExpenses from "../../store/selectors/expensesSelector";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>Expense List</h1>
      {expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);