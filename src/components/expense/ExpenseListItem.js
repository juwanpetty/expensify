import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../store/actions/expensesAction";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  const removeItem = () => {
    console.log("removing item...", { id, description, amount, createdAt });
    dispatch(removeExpense({ id }));
  };

  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt}
      </p>
      <button onClick={() => removeItem()}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItem);
