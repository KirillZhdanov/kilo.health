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
const GoBackButton = styled.a`
  display: block;
  margin-bottom: 20px;
`;
const OverviewPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0 10px;
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
`;
const OverviewImage = styled.img`
  width: 100%;
`;
const OverviewTrainingSet = styled.div`
  border-top: 1px solid #eeeeee;
`;
const OverviewTrainingSetTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 6px;
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
`;
const OverviewTrainingDescription = styled.div`
  margin-left: 16px;
`;
const OverviewTrainingDescriptionTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
const PlayerControlPanel = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  border-top: 8px solid #eeeeee;
`;
const PlayerButton = styled.div`
  display: flex;
  justify-content: center;
  width: 74px;
  height: 48px;
  border: 2px solid #aa00ff;
  box-sizing: border-box;
  border-radius: 8px;
`;
const PlayerButtonIcon = styled.img`
  width: 12px;
`;
const PlayerVideo = styled.video`
  width: 100%;
  max-height: 565px;
  margin-top: 20px;
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
`;
const PlayerControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  StartWorkoutButton,
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
  PlayerButtonIcon,
  PlayerButton,
  PlayerControlsContainer,
  BackButtonContainer,
};
