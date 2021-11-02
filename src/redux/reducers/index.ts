import { combineReducers } from "redux";
import { workoutsReducer } from "./workoutsReducer";

const rootReducer = combineReducers({
	workouts: workoutsReducer,
});

export default rootReducer;
