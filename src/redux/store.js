import { createStore } from 'redux';
import { rootReducer } from './reducers';

// Creating Redux store and connecting it to Redux DevTools for debugging
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;