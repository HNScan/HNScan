import styled from 'styled-components';
import { Column, HorizontalContainer } from '../../components/Cards/Cards';

export const Wrapper = styled.div`
  padding: 24px;
`;

export const Header = styled.h3`
  border-bottom: 1px solid var(--border-color);
  padding: 10px 0;
`;

export const ColumnHeader = styled.h4`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const FullColumn = styled(Column)`
  width: 100% !important;
`;

export const BorderedContainer = styled(HorizontalContainer)`
  border-bottom: 2px solid ${props => props.theme['--border-color']};
  margin-left: 0;
  margin-right: 0;
`;
