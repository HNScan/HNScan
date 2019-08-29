// These are custom components for the home screen
import styled from 'styled-components';

export const Card = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin: 10px 0;
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
