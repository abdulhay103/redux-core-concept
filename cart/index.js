const { createStore, combineReducers } = require("redux");

// Global Variables
const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// Initialized State
const initialCartState = {
  carts: ["Mango"],
  totalItems: 1,
};
const initialProductState = {
  products: ["Samsung", "Simence"],
  totalItems: 2,
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

// Cart Reducer
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
      return state;
  }
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

const rootReducer = combineReducers({
  cartReducerKey: cartReducer,
  productReducerKey: productReducer,
});

// Define Store
const store = createStore(rootReducer);

// Subscribe Store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Store
store.dispatch(getCarts());
store.dispatch(addCart("Banana"));
store.dispatch(getProducts());
store.dispatch(addProduct("iPhone"));
