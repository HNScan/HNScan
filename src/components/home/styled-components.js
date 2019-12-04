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

const ItemDetail = styled.div`
  display: flex;
  font-size: 12px;
  margin: 2px 0;
`;

export const LeftItemDetail = styled(ItemDetail)`
  white-space: pre;
  &:first-child {
    font-size: 14px;
  }
`;

export const RightItemDetail = styled(ItemDetail)`
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
