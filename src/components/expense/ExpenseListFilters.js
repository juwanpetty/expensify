import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate
} from "../../store/actions/filtersAction";

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onChangeInput = event => {
    this.props.dispatch(setTextFilter(event.target.value));
    console.log(event.target.value);
  };

  onChangeSelect = event => {
    if (event.target.value === "date") {
      this.props.dispatch(sortByDate());
    } else {
      this.props.dispatch(sortByAmount());
    }

    console.log(event.target.value);
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState({
      calendarFocused
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={event => this.onChangeInput(event)}
          value={this.props.filters.text}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={event => this.onChangeSelect(event)}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={() => this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
