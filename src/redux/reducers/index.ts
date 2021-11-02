import { combineReducers } from 'redux';
import { workoutsReducer } from './workouts';

const rootReducer = combineReducers({
  workouts: workoutsReducer,
});

export default rootReducer;
