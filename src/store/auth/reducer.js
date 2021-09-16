import * as actionTypes from './types';
import { updateObject } from '../../utils/storeUtils';

const initialState = {
  loading: false,
  error: null,
  token: null,
  isAuth: false,
};

//  Auth reducer's utilized functions for compact reducer's code
const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    token: action.token,
    isAuth: true,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    isAuth: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    loading: false,
    isAuth: false,
  });
};

// Auth reducer itself
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    default: return state;
  }
};

export default authReducer;