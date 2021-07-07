import * as actionTypes from './types';
import { updateObject } from '../../utils/storeUtils';

const initialState = {
  loading: false,
  error: null,
  post: null,
};

const postLoad = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
    post: null,
  })
};

const postSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
    post: action.payload,
  })
};

const postFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload,
    post: null,
  });
};

const postRemove = (state, action) => {
  return updateObject(state, {
    loading: false,
    post: null,
  });
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_LOAD: return postLoad(state, action);
    case actionTypes.POST_SUCCESS: return postSuccess(state, action);
    case actionTypes.POST_FAIL: return postFail(state, action);
    case actionTypes.POST_REMOVE: return postRemove(state, action);
    default: return state;
  }
};

export default postReducer;