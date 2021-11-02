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
  position: absolute;
  top: 20px;
  left: 20px;
`;
const OverviewPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 84px;
  position: relative;
  margin-bottom: 32px;
`;
const OverviewImage = styled.img`
  width: 100%;
`;

export { StartWorkoutButton, GoBackButton, OverviewPageWrapper, OverviewImage };
