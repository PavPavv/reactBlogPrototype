import { combineReducers } from 'redux';

// APP REDUCERS
import authReducer from './auth/reducer';
import postReducer from './post/reducer';

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
});

export default rootReducer;
