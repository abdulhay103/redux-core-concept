const { createStore } = require("redux");

// Global Variables
const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";

// Initialized State
const initialCartState = {
  carts: ["Mango"],
  totalItems: 1,
};

// Actions Type
const getCarts = () => {
  return {
    type: GET_CARTS,
  };
};
const addCart = (item) => {
  return {
    type: ADD_CART,
    payload: item,
  };
};

// Create Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return {
        ...state,
      };

    case ADD_CART:
      return {
        carts: [...state.carts, action.payload],
        totalItems: state.totalItems + 1,
      };

    default:
      state;
  }
};

// Define Store
const store = createStore(cartReducer);

// Apply store's method
// Subscribe Store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Store
store.dispatch(getCarts());
store.dispatch(addCart("Banana"));
