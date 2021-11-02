import { all } from "redux-saga/effects";
import { fetchWorkoutsWatcher } from "./workouts";

export function* rootWatcher() {
	yield all([fetchWorkoutsWatcher()]);
}
