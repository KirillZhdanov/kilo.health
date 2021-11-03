import { useSelector } from 'react-redux';
import completedIcon from '../../assets/completedIcon.svg';
import { Workout } from '../../models';
import { getWorkouts } from '../../redux/selectors';
import {
  OverviewPageWrapper,
  ExercisePageContainer,
  WorkoutCompleteTitle,
  OverviewTrainingExerciseTitle,
  WorkoutCompleteSecondaryText,
  SaveAndContinueButton,
} from '../../components/StyledComponents';
import { Link } from 'react-router-dom';
import { formatTime } from '../../utils';

export const CompletedExercises = () => {
  const { exercises, completedExercisesIds } = useSelector(getWorkouts) as Workout;
  const seconds = exercises
    .filter((exercise) => exercise?.id && completedExercisesIds.hasOwnProperty(exercise.id))
    .reduce((acc, exercise) => acc + exercise.duration, 0);

  return (
    <OverviewPageWrapper>
      <ExercisePageContainer>
        <img alt="completed" src={completedIcon} />
        <WorkoutCompleteTitle>Workout completed!</WorkoutCompleteTitle>
        <WorkoutCompleteSecondaryText>Nice job. You’re done. Here’s the workout summary.</WorkoutCompleteSecondaryText>
        <WorkoutCompleteSecondaryText>Burned calories</WorkoutCompleteSecondaryText>
        <OverviewTrainingExerciseTitle>{formatTime(seconds)}</OverviewTrainingExerciseTitle>
      </ExercisePageContainer>
      <SaveAndContinueButton as={Link} to="/">
        Save &amp; Continue
      </SaveAndContinueButton>
    </OverviewPageWrapper>
  );
};
