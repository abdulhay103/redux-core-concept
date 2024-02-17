const { createStore } = require("redux");

// Global Variables
const GET_TODOS = "GET_TODOS";
const SUCCESS_TODO = "SUCCESS_TODO";
const ERROR_TODO = "ERROR_TODO";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// States Define
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

// Actions Defines
const getTodos = () => {
  return {
    type: GET_TODOS,
  };
};
const successTodo = (todos) => {
  return {
    type: SUCCESS_TODO,
    payload: todos,
  };
};
const errorTodo = (msg) => {
  return {
    type: ERROR_TODO,
    payload: msg,
  };
};

// Reducer Define
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_TODO:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case ERROR_TODO:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// Create Store
const store = createStore(todosReducer);

store.subscribe(() => {
  console.log(store.getState);
});

store.dispatch(getTodos());
store.dispatch(successTodo("hello"));
