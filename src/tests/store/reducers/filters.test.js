import filtersReducer from "../../../store/reducers/filtersReducer";
import moment from "moment";

it("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

it("should set sort by to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

it("should set sort by to date", () => {
  const defaultState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(defaultState, action);

  expect(state.sortBy).toBe("date");
});

it("should set text filter", () => {
  const text = "This is my filter";
  const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text });
  expect(state.text).toBe(text);
});

it("should set start date filter", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    date: startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

it("should set end date filter", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    date: endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
