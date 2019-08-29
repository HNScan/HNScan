// These are custom container components for the home screen
import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 95%;
  margin: 50px auto 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 460px);

  @media (min-width: 1024px) {
    width: 90%;
  }
`;

export const HorizontalContainer = styled.div`
  padding: 12px;
  width: 100%;
`;

export const VerticalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  /* TODO: Need to find a better unit than px's for media queries */
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const IndividualCardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;

  @media (min-width: 1024px) {
    padding: 24px 12px;
  }
`;
