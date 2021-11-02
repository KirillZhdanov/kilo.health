import { takeEvery, call, put } from "redux-saga/effects";
import { Workout } from "../../../models";
import { FETCH_USERS_WORKOUTS, setWorkoutsData } from "../../actions";

const API_TOKEN = process.env.REACT_APP_TOKEN;

const fetchUsersWorkoutsFromApi = async (): Promise<Workout> =>
	fetch(
		`https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=${API_TOKEN}`
	)
		.then((response) => response.json())
		.then((response) => response.data);
function* fetchWorkoutsWorker() {
	try {
		const workoutsData = (yield call(fetchUsersWorkoutsFromApi)) as Workout;
		yield put(setWorkoutsData(workoutsData));
	} catch (error) {
		throw new Error(JSON.stringify(error));
	}
}

export function* fetchWorkoutsWatcher() {
	yield takeEvery(FETCH_USERS_WORKOUTS, fetchWorkoutsWorker);
}
