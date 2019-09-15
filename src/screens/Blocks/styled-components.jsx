import { Table } from 'reactbulma/lib/components/Table/Table.js';
import styled from 'styled-components';

export const TableContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  @media (min-width: 680px) { padding: 1.5rem; }
`;

export const BlocksTable = styled(Table)`
  width: 90%;
  height: auto;
  margin: 10px auto;
  @media (min-width: 680px) { width: 95%; }
`;

export const Abbr = styled.abbr`
  text-decoration: none;
`;

// ----- Age Row Components -----
export const AgeHead = styled(Table.Th)`
  display: none;
  @media (min-width: 680px) { display: table-cell; }
`;

export const AgeRow = styled(Table.Td)`
  display: none;
  @media (min-width: 680px) { display: table-cell; }
`;

export const MobileAge = styled.div`
  display: block;
  font-size: 14px;
  @media (min-width: 680px) { display: none; }
`;

// ----- Miner Row Components -----
export const MinerAddress = styled.a`
  display: none;
  @media (min-width: 869px) { display: table-cell; }
`;

export const TruncatedMiner = styled.a`
  display: block;
  @media (min-width: 869px) { display: none; }
`;

// ----- Size Row Components -----
export const SizeHead = styled(Table.Th)`
  display: none;
  @media (min-width: 680px) { display: table-cell; }
`;

export const SizeRow = styled(Table.Td)`
  display: none;
  @media (min-width: 680px) { display: table-cell; }
`;

export const MobileSize = styled.div`
  display: block;
  font-size: 14px;
  @media (min-width: 680px) { display: none; }
`;
