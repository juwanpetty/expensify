import {
  addExpense,
  editExpense,
  removeExpense
} from "../../../store/actions/expensesAction";

it("should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

it("should set up edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note value" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value"
    }
  });
});

it("should set up add expense aciton object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent"
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

it("should set up add expense aciton object with default values", () => {
  const expenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  const action = addExpense({});
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});
