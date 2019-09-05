// These are components for the footer
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 25px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin-bottom: 50px;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 90%;
    max-width: 1216px;
  }
`;

export const LeftContent = styled.div`
  height: 100%;
  text-align: center;
  max-width: 200px;

  @media (min-width: 1024px) {
    text-align: left;
    flex-direction: row;
    min-width: 200px;
    max-width: none;
  }
`;

export const Tagline = styled.div`
  margin-bottom: 20px;
`;

export const Header = styled.div`
  text-transform: uppercase;
  font-size: 10pt;
  letter-spacing: 1px;
  font-weight: 700;
  width: 100%;
`;

export const ContactItem = styled.div`
  font-size: 10pt;
  margin: 5px 0;
`;

export const Item = styled.a`
  font-size: 10pt;
  margin: 8px 0;
  width: 55%;
  color: #4A4A4A;

  &:hover { color: #3273DC; }

  @media (min-width: 445px) {
    margin: 5px 0;
  }
`;

export const RightContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 50px;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const LeftLinksContainer = styled.div`
  height: auto;
  display: flex;
  margin-bottom: 30px;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: row;

  @media (min-width: 445px) {
    margin-bottom: 0;
  }
`;

export const RightLinksContainer = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: row;
`;

export const LinksContainer = styled.div`
  height: auto;
  min-width: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

// ----- Toggle Switch and Copyright -----
export const ToggleThemeContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
