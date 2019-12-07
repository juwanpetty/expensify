import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: "",
    cretaedAt: moment(),
    calendarFocused: false
  };

  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState({
      description
    });
  };

  onNoteChange = event => {
    const note = event.target.value;
    this.setState({
      note
    });
  };

  onAmountChange = event => {
    const amount = event.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({
        amount
      });
    }
  };

  onDateChange = cretaedAt => {
    this.setState({
      cretaedAt
    });
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name=""
            id=""
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.cretaedAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a not for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
