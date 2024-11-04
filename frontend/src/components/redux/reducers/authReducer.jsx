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
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
  error: null,
  success: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: null,
        success: action.type === LOGIN_SUCCESS 
          ? 'Login successful!' 
          : 'Registration successful! You are now logged in.',
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: action.payload,
        success: null,
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: null,
        success: 'Logged out successfully!',
      };

    default:
      return state;
  }
};

export default authReducer;