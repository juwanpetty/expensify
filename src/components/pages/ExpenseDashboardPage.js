import React from "react";
import ExpenseList from "../expense/ExpenseList";
import ExpenseListFilters from "../expense/ExpenseListFilters";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
