// These are custom components for the home screen
import styled from 'styled-components';

export const Card = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #4a4a4a;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
`;

export const Header = styled.div`
  align-items: stretch;
  box-shadow: 0 1px 2px rgba(10,10,10,.1);
  display: flex;
`;

export const HeaderTitle = styled.div`
  color: #4a4a4a;
  align-items: center;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
  padding: .75rem;
`;

export const HeaderLink = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: .75rem;
`;

export const Content = styled.div`
  padding: .75rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  width: 100%;
  padding: 12px;

  @media (min-width: 769px) {
    width: 33.3333%;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ItemLabel= styled.div`
  font-weight: 800;
`;

export const ItemDetail = styled.div`
  font-size: 24px;
`;
