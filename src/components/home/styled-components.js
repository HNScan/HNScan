// These are custom components for the home screen
import styled from "styled-components";

export const SummaryItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0.75rem 0;

  /* @Exception: custom media query breakpoint */
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

export const LeftItemDetail = styled.div`
  font-size: 12px;
  margin: 2px 0;
  white-space: nowrap;

  &:first-child {
    font-size: 16px;
    display: flex;
  }
`;

export const RightItemDetail = styled.div`
  display: flex;
  font-size: 12px;
  margin: 2px 0;

  /* @Exception: custom media query breakpoint */
  @media (min-width: 850px) {
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
