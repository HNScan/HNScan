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
  width: 100%;
  margin: 10px auto;

  ${Th}, ${Td} {
    border-color: ${props => props.theme.cards.borderColor};
    background-color: ${props => props.theme.cards.background};
    color: ${props => props.theme.global.textColor};
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

DataTable.Th = Th;
DataTable.Tr = Tr;
DataTable.Td = Td;
DataTable.Body = Body;
DataTable.Head = Head;
DataTable.Wrapper = Wrapper;
