import React from 'react';
import { Exercise } from '../../models';

interface TrainingExercises {
  exercises: Exercise[];
}
interface CurrentExercise {
  currentExerciseIndex: number;
  duration: number;
}

export const useTraining = ({ exercises }: TrainingExercises): CurrentExercise => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0);
  // const [isPaused, setIsPaused] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState(exercises[currentExerciseIndex]?.duration);

  function reduceCounterValue() {
    setSecondsLeft(secondsLeft - 1);
  }
  React.useEffect(() => {
    setTimeout(() => {
      // if (isPaused) {
      //   return;
      // }
      if (secondsLeft === 0) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
        setSecondsLeft(exercises[currentExerciseIndex + 1].duration);
        return;
      }

      reduceCounterValue();
    }, 1000);
  }, [secondsLeft]);

  return {
    currentExerciseIndex,
    duration: secondsLeft,
  };
};
