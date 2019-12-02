import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../../store/actions/filtersAction";

const ExpenseListFilters = ({ filters, dispatch }) => {
  const onChangeInput = event => {
    dispatch(setTextFilter(event.target.value));
    console.log(event.target.value);
  };

  const onChangeSelect = event => {
    if (event.target.value === "date") {
      dispatch(sortByDate());
    } else {
      dispatch(sortByAmount());
    }

    console.log(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={event => onChangeInput(event)}
        value={filters.text}
      />
      <select value={filters.sortBy} onChange={event => onChangeSelect(event)}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
