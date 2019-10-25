// These are custom components for the home screen
import styled from "styled-components";
import { Link } from "react-router-dom";

// ----- REUSABLE GENERICS -----
export const Card = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme["--card-background"]};
  color: ${props => props.theme["--text-color-normal"]};
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);

  & a:hover {
    color: ${props => props.theme["--text-color-normal"]};
  }

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

// The header of every card
const Header = styled.div`
  align-items: stretch;
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
  display: flex;
`;

// The header title on every card
const HeaderTitle = styled.div`
  // color: ${props => props.theme["--text-color-normal"]};
  align-items: center;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
  padding: 0.75rem;
`;

// View all links in the header
const HeaderLink = styled(Link)`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
`;

// Content container for all cards
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 1.5rem;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

// ----- TX'S AND BLOCKS SPECIFIC -----
// Used on the home screen for recent TX's and Blocks
const SummaryItemContainer = styled.div`
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

const SummaryItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  /* @Exception: custom media query breakpoint */
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

const SummaryItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const LeftItemDetail = styled.div`
  font-size: 12px;
  margin: 2px 0;

  &:first-child {
    font-size: 16px;
    display: flex;
    flex-direction: row;
  }
`;

const RightItemDetail = styled.div`
  display: flex;
  font-size: 12px;
  margin: 2px 0;

  /* @Exception: custom media query breakpoint */
  @media (min-width: 850px) {
    justify-content: flex-end;
  }
`;

const ItemLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  margin: 1px 5px 0 0;
`;

Card.Header = Header;
Card.HeaderTitle = HeaderTitle;
Card.HeaderLink = HeaderLink;
Card.Content = Content;
Card.SummaryContainer = SummaryContainer;
Card.SummaryItem = SummaryItem;
Card.SummaryItemContent = SummaryItemContent;
Card.SummaryItemContainer = SummaryItemContainer;
Card.LeftItemDetail = LeftItemDetail;
Card.RightItemDetail = RightItemDetail;
Card.ItemLogo = ItemLogo;
