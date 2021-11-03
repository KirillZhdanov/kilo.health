import React from 'react';
import { useSelector } from 'react-redux';
import { Workout } from '../../models';
import { RootState } from '../../redux/store';
import { Loading } from '../../components';
import { Link } from 'react-router-dom';
import {
  GoBackButton,
  StartWorkoutButton,
  OverviewPageWrapper,
  OverviewPageContainer,
  OverviewSecondaryText,
  OverviewImage,
  OverviewTrainingImage,
  OverviewTrainingSet,
  OverviewTrainingSetTitle,
  OverviewTrainingDescription,
  OverviewTrainingDescriptionTitle,
  OverviewTrainingExerciseTitle,
  OverviewTrainingExercise,
} from '../../components/StyledComponents';
import { getWorkouts } from '../../redux/selectors';
import backIcon from '../../assets/backIcon.svg';
import overviewImage from '../../assets/overviewImage.png';

export const Overview = () => {
  const { loaded, error, name, questions } = useSelector<RootState>(getWorkouts) as Workout;
  if (!loaded && !error) {
    return <Loading />;
  }
  return (
    <OverviewPageWrapper>
      <OverviewPageContainer>
        <GoBackButton as={Link} to="/">
          <img alt="go back" src={backIcon} />
        </GoBackButton>
        <OverviewImage alt="overview main image" src={overviewImage} />
        <OverviewSecondaryText>Day 1</OverviewSecondaryText>
        <OverviewTrainingSetTitle>{name?.toUpperCase()}</OverviewTrainingSetTitle>
        <OverviewSecondaryText>Easy • 15 min • No equipment</OverviewSecondaryText>
        {questions.map(({ title, exercises }, idx) => (
          <OverviewTrainingSet key={`${title}_${idx}`}>
            <OverviewTrainingExerciseTitle>{title}</OverviewTrainingExerciseTitle>
            {exercises.map(({ id, title, photo, description }) => (
              <OverviewTrainingExercise key={id}>
                <OverviewTrainingImage alt={title} src={photo} />
                <OverviewTrainingDescription>
                  <OverviewTrainingDescriptionTitle>{title}</OverviewTrainingDescriptionTitle>
                  <OverviewSecondaryText>{description}</OverviewSecondaryText>
                </OverviewTrainingDescription>
              </OverviewTrainingExercise>
            ))}
          </OverviewTrainingSet>
        ))}
      </OverviewPageContainer>
      <StartWorkoutButton as={Link} to="/exercise/1">
        Start Workout
      </StartWorkoutButton>
    </OverviewPageWrapper>
  );
};
