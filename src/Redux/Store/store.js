import { createStore } from "redux";
import allReducer from "../Reducer";
import { loadState, saveState } from "../../localStorage";

const persistedState = loadState();

const store = createStore(
  allReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
  //   console.log(store.getState());
});

export default store;
