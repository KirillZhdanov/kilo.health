import { useSelector } from 'react-redux';
import completedIcon from '../../assets/completedIcon.svg';
import { Workout } from '../../models';
import { getWorkouts } from '../../redux/selectors';
import {
  OverviewPageWrapper,
  ExercisePageContainer,
  OverviewTrainingSetTitle,
  OverviewTrainingExerciseTitle,
  OverviewSecondaryText,
  SaveAndContinueButton,
} from '../../components/StyledComponents';
import { Link } from 'react-router-dom';

export const CompletedExercises = () => {
  const { exercises, completedExercisesIds } = useSelector(getWorkouts) as Workout;
  const seconds = exercises
    .filter((exercise) => exercise?.id && completedExercisesIds.hasOwnProperty(exercise.id))
    .reduce((acc, exercise) => acc + exercise.duration, 0);

  return (
    <OverviewPageWrapper>
      <ExercisePageContainer>
        <img alt="completed" src={completedIcon} />
        <OverviewTrainingSetTitle>Workout completed!</OverviewTrainingSetTitle>
        <OverviewSecondaryText>Nice job. You’re done. Here’s the workout summary.</OverviewSecondaryText>
        <OverviewSecondaryText>Burned calories</OverviewSecondaryText>
        <OverviewTrainingExerciseTitle>{seconds} sec.</OverviewTrainingExerciseTitle>
      </ExercisePageContainer>
      <SaveAndContinueButton as={Link} to="/">
        Save and Continue
      </SaveAndContinueButton>
    </OverviewPageWrapper>
  );
};
