import styled from "styled-components";
import Table from "reactbulma/lib/components/Table/Table.js";

const Th = styled(Table.Th)`
  abbr {
    color: ${props => props.theme.global.textColor};
  }
`;
const Tr = styled(Table.Tr)``;
const Td = styled(Table.Td)``;
const Body = styled(Table.Body)``;
const Head = styled(Table.Head)``;

export const DataTable = styled(Table)`
  height: auto;
  width: 90%;
  margin: 10px auto;
  @media (min-width: 680px) {
    width: 95%;
  }

  ${Th}, ${Td} {
    border-color: ${props => props.theme.cards.borderColor};
    background-color: ${props => props.theme.cards.background};
    color: ${props => props.theme.global.textColor};
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  @media (min-width: 680px) {
    padding: 1.5rem;
  }
`;

DataTable.Th = Th;
DataTable.Tr = Tr;
DataTable.Td = Td;
DataTable.Body = Body;
DataTable.Head = Head;
DataTable.Wrapper = Wrapper;
