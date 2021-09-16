import * as actionTypes from './types';
import { fakeFetch } from '../../utils/storeUtils';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const logout = () => {
  localStorage.removeItem('fakeToken');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime)
  }
};

// export const authCheckState = expirationTime => {
//   return dispatch => {
//     const user = localStorage.getItem('fakeToken');

//     if (user) {
//       const expirationDate = new Date(new Date().getTime() + expirationTime);
//       if (expirationDate > new Date()) {
//         dispatch(authSuccess());
//         checkAuthTimeout(expirationDate.getSeconds() - new Date().getSeconds());
//       } else {
//         dispatch(logout());
//       }
//     } else {
//       dispatch(logout());
//     }
//   }
// };

export const auth = (login, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      login,
      password,
    };

    // http request here
    fakeFetch(authData)
      .then(result => {
        const token = result.token;
        const expirationTime = result.expires_in;
        if (token) {
          console.log('Success');
          console.log(result);
          dispatch(authSuccess(token));
          dispatch(checkAuthTimeout(expirationTime));
          localStorage.setItem('fakeToken', token);
        } else {
          console.log('>>>Error<<<');
          dispatch(authFail(result.message));
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}