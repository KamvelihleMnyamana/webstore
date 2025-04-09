import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, USER_LOGIN, USER_LOGOUT } from './actions';

// Reducer for handling shopping cart state
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Adds a new product to the existing cart array
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      // Removes a product based on its ID
      return state.filter(item => item.id !== action.payload);

    default:
      return state; // Return unchanged state by default
  }
};

// Reducer for managing user authentication state
const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      // Sets username when logging in
      return action.payload;

    case USER_LOGOUT:
      // Clears username when logging out
      return null;

    default:
      return state; // Return unchanged state by default
  }
};

// Combine individual reducers into a single reducer
export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});