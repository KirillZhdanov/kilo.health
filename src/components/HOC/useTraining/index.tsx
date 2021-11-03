import React from 'react';
import { useDispatch } from 'react-redux';
import { Exercise } from '../../../models';
import { setExerciseCompleted } from '../../../redux/actions';

interface TrainingExercises {
  exercises: Exercise[];
}
interface CurrentExercise {
  currentExerciseIndex: number;
  duration: number;
  setIsPaused: (value: boolean) => void;
  isPaused: boolean;
  changeCurrentExercise: (index: number) => void;
}

export const useTraining = ({ exercises }: TrainingExercises): CurrentExercise => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState(exercises[currentExerciseIndex]?.duration);
  const dispatch = useDispatch();

  const reduceCounterValue = React.useCallback(() => {
    setSecondsLeft(secondsLeft - 1);
  }, [secondsLeft]);
  const changeCurrentExercise = (index: number) => {
    setSecondsLeft(exercises[index]?.duration);
    setCurrentExerciseIndex(index);
    setIsPaused(false);
  };
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPaused || currentExerciseIndex === exercises.length) {
        return;
      }
      if (secondsLeft === 0) {
        dispatch(setExerciseCompleted(exercises[currentExerciseIndex]));
        setCurrentExerciseIndex(currentExerciseIndex + 1);
        setSecondsLeft(exercises[currentExerciseIndex + 1].duration);
        return;
      }
      reduceCounterValue();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [secondsLeft, isPaused, currentExerciseIndex, exercises, reduceCounterValue, dispatch]);

  return {
    currentExerciseIndex,
    changeCurrentExercise,
    duration: secondsLeft,
    setIsPaused,
    isPaused,
  };
};
