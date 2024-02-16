const { createStore } = require("redux");

//Global Variable
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initalConterState = {
  count: 0,
};
const initalUsersState = {
  users: [{ name: "Abdul Hay" }],
};

//action
const incrementCounter = () => {
  return { type: INCREMENT };
};
const decrementCounter = () => {
  return { type: DECREMENT };
};

// Reducer
const counterReducer = (state = initalConterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      state;
  }
};

// Create Store
const store = createStore(counterReducer);

// Subscribe Store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch a action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
