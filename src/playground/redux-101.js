import { createStore } from "redux";

const initialState = {
  count: 0
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

// TODO: Add Increment Action
store.dispatch({ type: "INCREMENT" });

// TODO: Add Decrement Action
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });

// TODO: Add Reset Action
// store.dispatch({ type: "RESET" });

console.log(store.getState());
