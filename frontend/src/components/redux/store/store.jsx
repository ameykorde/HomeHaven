// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk }from 'redux-thunk'; // Import thunk correctly
import { composeWithDevTools } from 'redux-devtools-extension'; // Ensure this is imported correctly

import rootReducer from '../reducers/rootReducer';

const initialState = {}; // Define any initial state if needed

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
