import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// Store creation
export default () => {
  const store = createStore(rootReducer);

  return store;
};
