import React from 'react';
import { Loading, ProgressBar } from '../../components';
import {
  OverviewPageWrapper,
  ExercisePageContainer,
  ExerciseTitle,
  GoBackButton,
  BackButtonContainer,
  PlayerControlPanel,
  PlayerControlsContainer,
  PlayerVideo,
  PlayerButton,
  PlayerButtonIcon,
} from '../../components/StyledComponents';
import backIcon from '../../assets/backIcon.svg';
import pauseIcon from '../../assets/pauseIcon.svg';
import playIcon from '../../assets/playIcon.svg';
import arrowPrev from '../../assets/arrowPrev.svg';
import arrowNext from '../../assets/arrowNext.svg';
import { Exercise as ExerciseType, Workout } from '../../models';
import { RootState } from '../../redux/store';
import { getWorkouts } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTraining } from '../../components';

export const Exercise = () => {
  const trainingVideo = React.useRef<HTMLVideoElement>(null);
  const { loaded, questions } = useSelector<RootState>(getWorkouts) as Workout;
  const exercises = questions.map(({ exercises }) => exercises).flat() as ExerciseType[];
  const { currentExerciseIndex, changeCurrentExercise, duration, setIsPaused, isPaused } = useTraining({ exercises });
  const currentExercise = exercises[currentExerciseIndex];

  const pauseTraining = () => {
    setIsPaused(!isPaused);
    isPaused ? trainingVideo.current?.play() : trainingVideo.current?.pause();
  };
  const prevExercise = () => {
    changeCurrentExercise(currentExerciseIndex - 1);
  };
  const nextExercise = () => {
    changeCurrentExercise(currentExerciseIndex + 1);
  };

  if (!loaded) {
    return <Loading />;
  }

  return (
    <OverviewPageWrapper>
      <ExercisePageContainer>
        <BackButtonContainer>
          <GoBackButton as={Link} to="/">
            <img alt="go back" src={backIcon} />
          </GoBackButton>
        </BackButtonContainer>
        <ExerciseTitle>{currentExercise?.title}</ExerciseTitle>
        <PlayerControlsContainer>
          {!!currentExerciseIndex ? (
            <PlayerButton onClick={prevExercise}>
              <PlayerButtonIcon alt="prev" src={arrowPrev} />
            </PlayerButton>
          ) : (
            <div></div>
          )}
          <ProgressBar
            size={110}
            value={duration}
            percentage={(duration / currentExercise.duration) * 100}
            lineWidth={8}
            color="#FF4081"
          />
          {currentExerciseIndex !== exercises.length ? (
            <PlayerButton onClick={nextExercise}>
              <PlayerButtonIcon alt="prev" src={arrowNext} />
            </PlayerButton>
          ) : (
            <div></div>
          )}
        </PlayerControlsContainer>
        <PlayerVideo src={currentExercise.video} autoPlay={true} loop={true} ref={trainingVideo} />
      </ExercisePageContainer>
      <PlayerControlPanel>
        <img onClick={pauseTraining} alt="pause training" src={isPaused ? playIcon : pauseIcon} />
      </PlayerControlPanel>
    </OverviewPageWrapper>
  );
};
