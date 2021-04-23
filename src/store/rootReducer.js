import { combineReducers } from 'redux';

// APP REDUCERS
import authReducer from './auth/reducer';

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
