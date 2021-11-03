import { Exercise, Workout } from '../../models';
export const FETCH_USERS_WORKOUTS = 'FETCH_USERS_WORKOUTS';
export const SET_WORKOUTS_DATA = 'SET_WORKOUTS_DATA';
export const SET_EXERCISE_COMPLETED = 'SET_EXERCISE_COMPLETED';
export const SET_ERROR_ON_LOAD = 'SET_ERROR_ON_LOAD';

export const fetchUsersWorkouts = () => ({
  type: FETCH_USERS_WORKOUTS,
});

export const setWorkoutsData = (payload: Workout) => ({
  type: SET_WORKOUTS_DATA,
  payload,
});
export const setExerciseCompleted = (payload: Exercise) => ({
  type: SET_EXERCISE_COMPLETED,
  payload,
});
