import { combineReducers } from 'redux';
import JGReducer from './JGReducer';
import QDReducer from './QDReducer';

const reducers = combineReducers({
  JGReducer,
  QDReducer
});

export default reducers;


