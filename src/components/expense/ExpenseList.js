import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "../expense/ExpenseListItem";
import selectExpenses from "../../store/selectors/expensesSelector";

export const ExpenseList = ({ expenses }) => {
  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
