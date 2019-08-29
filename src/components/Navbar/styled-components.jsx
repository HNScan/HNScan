// These are custom fixes to overwrite default
// bulma styles to fit navbar needs better
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
`;

export const NavDropdown = styled.div`
  padding: 10px 40px 10px 25px !important;
`;

export const TouchMenuWrapper = styled.div`
  height: 50px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;
