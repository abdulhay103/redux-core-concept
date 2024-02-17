const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Global Variables

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// State Declations
const initialProductState = {
  products: ["Samsung", "Simence"],
  totalItems: 2,
};

// Actions Type

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (item) => {
  return {
    type: ADD_PRODUCT,
    payload: item,
  };
};

// product Reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        totalItems: state.totalItems + 1,
      };
    default:
      return state;
  }
};

// Define Store
const store = createStore(productReducer, applyMiddleware(logger));

// Subscribe Store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Store
store.dispatch(getProducts());
store.dispatch(addProduct("iPhone"));
