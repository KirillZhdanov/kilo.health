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
  OverviewImage,
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
      <div>
        <GoBackButton as={Link} to="/">
          <img alt="go back" src={backIcon} />
        </GoBackButton>
        <OverviewImage alt="overview main image" src={overviewImage} />
        <p>Day 1</p>
        <h3>{name}</h3>
        <p>Easy • 15 min • No equipment</p>
        <br />
        {questions.map(({ title, exercises }, idx) => (
          <React.Fragment key={`${title}_${idx}`}>
            <p>{title}</p>
            {exercises.map(({ id, title, photo, description }) => (
              <div key={id}>
                <img alt={title} src={photo} />
                <div>
                  <p>{title}</p>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <StartWorkoutButton as={Link} to="/exercise/1">
        Start Workout
      </StartWorkoutButton>
    </OverviewPageWrapper>
  );
};
