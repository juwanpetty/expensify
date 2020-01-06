import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends Component {
  constructor(props) {
    super();

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      cretaedAt: props.expense ? moment(props.expense.cretaedAt) : moment(),
      calendarFocused: false,
      formError: null
    };
  }

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

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        amount
      });
    }
  };

  onDateChange = cretaedAt => {
    if (cretaedAt) {
      this.setState({
        cretaedAt
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  onSubmit = event => {
    event.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState({
        formError: "Please provide description and amount"
      });
    } else {
      this.setState({
        formError: null
      });

      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        cretaedAt: this.state.cretaedAt.valueOf()
      });
    }
  };

  render() {
    const errorMarkup = this.state.formError ? (
      <p>{this.state.formError}</p>
    ) : null;

    return (
      <div>
        {errorMarkup}
        <form onSubmit={this.onSubmit}>
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
