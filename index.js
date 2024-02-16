const { createStore } = require("redux");

// Global Variable
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// States
const initialCounterState = {
  count: 0,
};

// Actions
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

// Reducers
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

// Create Store
const store = createStore(counterReducer);

// Use createStore's methods

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
store.dispatch(incrementAction());
