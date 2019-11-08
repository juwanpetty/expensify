import { createStore } from "redux";

const initialState = {
  count: 0
};

const store = createStore((state = initialState, action) => {
  return state;
});

console.log(store.getState());
