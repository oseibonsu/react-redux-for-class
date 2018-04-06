import { combineReducers } from 'redux';
import todos from './todos';
import dogs from './dogs';

const rootReducer = combineReducers({
  todos,
  dogs
});

export default rootReducer;