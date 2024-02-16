const { createStore } = require("redux");

// Global Variable
const ADD_USER = "ADD_USER";

// States
const initialUserState = {
  users: ["Abdul Hay"],
  count: 1,
};

// Actions
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// Reducers
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    default:
      state;
  }
};

// Create Store
const store = createStore(userReducer);

// Use createStore's methods
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUserAction("Asha"));
store.dispatch(addUserAction("Lamia"));
store.dispatch(addUserAction("Raihan"));
