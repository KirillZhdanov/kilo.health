import { SET_WORKOUTS_DATA, SET_EXERCISE_COMPLETED } from "../actions";
import { Workout } from "../../models";

const initialState: Workout = {
	name: "workouts",
	slug: "workouts",
	questions: [],
	loaded: false,
	error: null,
};
interface Action {
  type: string;
  payload: Workout;
}

export const workoutsReducer = (state: Workout = initialState, action: Action) => {
	switch (action.type) {
		case SET_WORKOUTS_DATA:
			return { ...action.payload, loaded: true, error: null };
    case SET_EXERCISE_COMPLETED: {

    }
	}
	return state;
};
