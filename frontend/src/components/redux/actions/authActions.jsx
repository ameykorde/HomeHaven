// src/actions/authActions.js

import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGOUT = 'LOGOUT';

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post('http://localhost:8080/email', { email, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Register Action
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const { data } = await axios.post('http://localhost:8080/users', { name, email, password });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : 'Email Id Already Register. Please try again.',
    });
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: LOGOUT });
};
