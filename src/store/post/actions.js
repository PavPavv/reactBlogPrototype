import axios from 'axios';

import * as actionTypes from './types';

export const postLoad = () => {
  return {
    type: actionTypes.POST_LOAD,
  };
}

export const postSuccess = post => {
  return {
    type: actionTypes.POST_SUCCESS,
    payload: post,
  };
};

export const postFail = error => {
  return {
    type: actionTypes.POST_FAIL,
    payload: error,
  };
};

export const postRemove = () => {
  return {
    type: actionTypes.POST_REMOVE,
  }
}

export const post = id => {
  return dispatch => {
    dispatch(postLoad());

    axios(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then(res => {
        const data = res.data[0];
        dispatch(postSuccess(data));
      })
      .catch(err => {
        console.log(err);
        dispatch(postFail(err));
      })
  }
};