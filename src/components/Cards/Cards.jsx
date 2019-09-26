// These are custom components for the home screen
import styled from 'styled-components';
import { Link } from "react-router-dom";

// ----- REUSABLE GENERICS -----
export const Card = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme["--card-background"]};
  color: ${props => props.theme["--text-color-normal"]};
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);

  & a:hover {
    color: ${props => props.theme["--text-color-normal"]};
  }

  &:not(:first-child){
    margin-top: 20px;
  }
`;

// The header of every card
export const Header = styled.div`
  align-items: stretch;
  box-shadow: 0 1px 2px rgba(10,10,10,.1);
  display: flex;
`;

// The header title on every card
export const HeaderTitle = styled.div`
  color: ${props => props.theme["--text-color-normal"]};
  align-items: center;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
  padding: .75rem;
`;

// View all links in the header
export const HeaderLink = styled(Link)`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: .75rem;
`;

// Content container for all cards
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

// Individual item containers for all cards
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

// ----- NETWORK SUMMARY SPECIFIC -----
export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 12px;

  &:first-child { margin-bottom: 0; }
  &:last-child { margin-top: 0; }

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

export const ItemLabel= styled.div`
  font-weight: 800;
`;

export const ItemDetail = styled.div`
  font-size: 24px;
`;


// ----- TX'S AND BLOCKS SPECIFIC -----
// Used on the home screen for recent TX's and Blocks
export const SummaryItemContainer = styled.div`
  display: flex;
  width: 100%;
  /* TODO: this needs to change to auto to take height of content */
  height: auto;
  padding: 0.75rem;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border: none;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const SummaryItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const LeftItemDetail = styled.div`
  font-size: 12px;
  margin: 2px 0;

  &:first-child {
    font-size: 16px;
    display: flex;
    flex-direction: row;
  }
`;

export const RightItemDetail = styled.div`
  display: flex;
  font-size: 12px;
  margin: 2px 0;

  @media (min-width: 769px) {
    justify-content: flex-end;
  }
`;

export const ItemLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  margin: 1px 5px 0 0;
`;
