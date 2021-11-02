import React from 'react';
import { ProgressBar } from '../../components';
import { OverviewPageWrapper, GoBackButton } from '../../components/StyledComponents';
import backIcon from '../../assets/backIcon.svg';
import { Exercise as ExerciseType, Workout } from '../../models';
import { RootState } from '../../redux/store';
import { getWorkouts } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTraining } from '../../components';

export const Exercise = () => {
  const { questions } = useSelector<RootState>(getWorkouts) as Workout;
  const exercises = questions.map(({ exercises }) => exercises).flat() as ExerciseType[];
  const { currentExerciseIndex, duration } = useTraining({ exercises });
  const currentExercise = exercises[currentExerciseIndex];
  return (
    <OverviewPageWrapper>
      <GoBackButton as={Link} to="/">
        <img alt="go back" src={backIcon} />
      </GoBackButton>
      <p>{currentExercise?.title}</p>
      <ProgressBar
        size={128}
        value={duration}
        percentage={(duration / currentExercise.duration) * 100}
        lineWidth={8}
        color="#FF4081"
      />
      <video src={currentExercise.video} autoPlay={true} loop={true} />
    </OverviewPageWrapper>
  );
};
