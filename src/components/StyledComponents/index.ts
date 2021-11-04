import styled from 'styled-components';

const StartWorkoutButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  height: 56px;
  background: #aa00ff;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  position: fixed;
  bottom: 32px;
`;
const SaveAndContinueButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 80%;
  height: 56px;
  background: #aa00ff;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  position: fixed;
  bottom: 40%;
`;

const GoBackButton = styled.a`
  display: block;
  margin-bottom: 20px;
  cursor: pointer;
`;
const OverviewPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 10px 10px;
  position: relative;
  text-align: left;
`;
const OverviewPageContainer = styled.div`
  max-width: 800px;
  margin-bottom: 84px;
`;
const OverviewSecondaryText = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
`;
const OverviewImage = styled.img`
  width: 100%;
`;
const OverviewTrainingSet = styled.div`
  border-top: 1px solid #eeeeee;
  margin-bottom: 20px;
`;
const OverviewTrainingSetTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 6px;
  margin: 17px 0;
`;
const OverviewTrainingExercise = styled.div`
  display: flex;
  align-items: center;
`;
const OverviewTrainingExerciseTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
`;
const OverviewTrainingImage = styled.img`
  max-width: 64px;
  max-height: 64px;
  border-radius: 5px;
`;
const OverviewTrainingDescription = styled.div`
  margin-left: 16px;
`;
const OverviewTrainingDescriptionTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 0;
`;
const PlayerControlPanel = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 80px;
  justify-content: center;
  background-color: #fff;
  border-top: 8px solid #eeeeee;
  bottom: 0;
`;
const PlayerButton = styled.div`
  display: flex;
  justify-content: center;
  width: 74px;
  height: 48px;
  border: 2px solid #aa00ff;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
`;
const PlayerButtonIcon = styled.img`
  width: 12px;
  cursor: pointer;
`;
const PlayerVideo = styled.video`
  width: 100%;
  max-height: 565px;
  margin-top: 20px;
  background-size: 100% 100%;
`;
const PlayerVideoContainer = styled.div<{ loaderImageUrl?: string }>`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.loaderImageUrl});
`;
const ExerciseTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
`;
const ExercisePageContainer = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 84px;
`;
const BackButtonContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-left: 10px;
  cursor: pointer;
`;
const PlayerControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WorkoutCompleteTitle = styled.p`
  font-weight: 600;
  font-size: 40px;
`;
const WorkoutCompleteSecondaryText = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #222222;
  opacity: 0.6;
`;

export {
  StartWorkoutButton,
  SaveAndContinueButton,
  GoBackButton,
  OverviewPageWrapper,
  OverviewPageContainer,
  OverviewSecondaryText,
  OverviewImage,
  OverviewTrainingSet,
  OverviewTrainingSetTitle,
  OverviewTrainingExercise,
  OverviewTrainingDescription,
  OverviewTrainingDescriptionTitle,
  OverviewTrainingExerciseTitle,
  OverviewTrainingImage,
  ExerciseTitle,
  ExercisePageContainer,
  PlayerControlPanel,
  PlayerVideo,
  PlayerVideoContainer,
  PlayerButtonIcon,
  PlayerButton,
  PlayerControlsContainer,
  BackButtonContainer,
  WorkoutCompleteTitle,
  WorkoutCompleteSecondaryText,
};
