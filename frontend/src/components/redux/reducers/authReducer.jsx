// src/reducers/authReducer.js

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
  } from '../actions/authActions';
  
  const initialState = {
    loading: false,
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
    error: null,
    success: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_REQUEST:
        return { ...state, loading: true, error: null, success: null };
      
      case LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload, error: null, success: null };
      
      case REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload, error: null, success: action.payload.message || 'Registration successful!' };
      
      case LOGIN_FAIL:
        return { loading: false, userInfo: null, error: action.payload, success: null };
      
      case REGISTER_FAIL:
        return { loading: false, userInfo: null, error: action.payload, success: null };
      
      case LOGOUT:
        return { loading: false, userInfo: null, error: null, success: null };
      
      default:
        return state;
    }
  };
  