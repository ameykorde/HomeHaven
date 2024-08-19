import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here in the future, e.g.,
  // user: userReducer,
  // products: productsReducer,
});

export default rootReducer;
