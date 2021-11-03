import { SET_WORKOUTS_DATA, SET_EXERCISE_COMPLETED } from '../../actions';
import { Workout, Exercise } from '../../../models';
import getReadyPic from '../../../assets/getReadyPic.png';

const initialState: Workout = {
  name: 'workouts',
  slug: 'workouts',
  questions: [],
  loaded: false,
  error: null,
  completedExercisesIds: {},
  exercises: [
    {
      id: 0,
      description: '',
      title: 'Get ready',
      video: '',
      duration: 5,
      photo: getReadyPic,
    },
  ],
};
interface Action {
  type: string;
  payload: Workout | Exercise;
}

export const workoutsReducer = (state: Workout = initialState, action: Action) => {
  switch (action.type) {
    case SET_WORKOUTS_DATA: {
      const { questions } = action.payload as Workout;
      const exercises = questions
        .map(({ exercises }) => exercises)
        .flat()
        .reduce<Exercise[]>((acc, currentExercise) => {
          return acc.concat([
            {
              id: 0,
              description: '',
              title: 'Get ready',
              video: '',
              duration: 5,
              photo: getReadyPic,
            },
            currentExercise,
          ]);
        }, []) as Exercise[];
      return { ...action.payload, exercises, loaded: true, error: null, completedExercisesIds: {} };
    }
    case SET_EXERCISE_COMPLETED: {
      const exerciseId = (action.payload as Exercise).id;
      const completedExerciseIds = state?.completedExercisesIds;
      completedExerciseIds[exerciseId] = exerciseId;
      return { ...state, completedExercisesIds: completedExerciseIds };
    }
  }
  return state;
};
