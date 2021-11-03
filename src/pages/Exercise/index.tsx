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
  PlayerVideoContainer,
  PlayerButton,
  PlayerButtonIcon,
} from '../../components/StyledComponents';
import backIcon from '../../assets/backIcon.svg';
import pauseIcon from '../../assets/pauseIcon.svg';
import playIcon from '../../assets/playIcon.svg';
import arrowPrev from '../../assets/arrowPrev.svg';
import arrowNext from '../../assets/arrowNext.svg';
import Spinner from './../../assets/Spinner.gif';
import { Workout } from '../../models';
import { RootState } from '../../redux/store';
import { getWorkouts } from '../../redux/selectors';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTraining } from '../../components';

export const Exercise = () => {
  const trainingVideo = React.useRef<HTMLVideoElement>(null);
  const { loaded, exercises } = useSelector<RootState>(getWorkouts) as Workout;

  const { currentExerciseIndex, changeCurrentExercise, duration, setIsPaused, isPaused } = useTraining({ exercises });
  const currentExercise = exercises[currentExerciseIndex];
  const [isSuspended, setIsSuspended] = React.useState(false);
  const [isErrorOnLoad, setIsErrorOnLoad] = React.useState(false);

  const history = useHistory();
  const pauseTraining = () => {
    if (isSuspended) return;
    setIsPaused(!isPaused);
    if (!!isErrorOnLoad) return;
    isPaused ? trainingVideo.current?.play() : trainingVideo.current?.pause();
  };
  const prevExercise = () => {
    changeCurrentExercise(currentExerciseIndex - 1);
  };
  const nextExercise = () => {
    changeCurrentExercise(currentExerciseIndex + 1);
  };
  const isCompleted = currentExerciseIndex === exercises.length;
  React.useEffect(() => {
    !isCompleted && history.replace(`/exercise/${currentExercise.id}`);
  }, [currentExercise, history, isCompleted]);

  const suspendHandler = React.useCallback(
    (suspend: boolean) => {
      if (suspend) {
        setIsErrorOnLoad(false);
      }
      setIsSuspended(suspend);
      setIsPaused(suspend);
    },
    [setIsPaused],
  );
  React.useEffect(() => {
    if (isErrorOnLoad) {
      setIsSuspended(false);
      setIsPaused(false);
    }
  }, [isErrorOnLoad, setIsPaused]);

  if (!loaded) {
    return <Loading />;
  }
  if (currentExerciseIndex === exercises.length) {
    return <Redirect to="/completed" />;
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
            percentage={(duration / currentExercise?.duration) * 100}
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
        <PlayerVideoContainer loaderImageUrl={Spinner}>
          <PlayerVideo
            src={currentExercise?.video}
            poster={currentExercise?.photo}
            ref={trainingVideo}
            autoPlay
            loop
            onError={(error) => {
              setIsErrorOnLoad(!!error);
            }}
            onLoadStart={(loading) => suspendHandler(!!loading)}
            onSuspend={(suspend) => suspendHandler(!suspend)}
            style={{ opacity: isSuspended ? '0.5' : '1' }}
          />
        </PlayerVideoContainer>
      </ExercisePageContainer>
      <PlayerControlPanel>
        <img onClick={pauseTraining} alt="pause training" src={isPaused ? playIcon : pauseIcon} width="54" />
      </PlayerControlPanel>
    </OverviewPageWrapper>
  );
};
