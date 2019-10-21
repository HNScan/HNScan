import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styles
import NavBar from "components/styles/NavBar";

// Components
import SearchBar from "components/layout/SearchBar";

// SVGs
import Logo from "components/svg/Logo";

const BorderedNav = styled(NavBar)`
  border-bottom: 1px solid ${props => props.theme.nav.borderColor};
  // box-shadow: 0px 1px 12px -1px rgba(0,0,0,0.30);
`;

const NavLinkItem = styled(NavBar.Item)`
  justify-content: center;

  @media (max-width: calc(${props => props.theme.breakpoints.desktop} - 1px)){
      padding-left: 12px;
      padding-right: 12px;
      margin-left: 2.5vw

    ${NavBar.Link} {
        padding-left: 0;

    }
  }
`;

const Burger = styled(NavBar.Burger)`
  @media (max-width: calc(${props => props.theme.breakpoints.desktop} - 1px)){
      margin-right: 2.5vw;
  }
`;

const LogoWrapper = styled(NavBar.Item)`
  @media (max-width: calc(${props => props.theme.breakpoints.desktop} - 1px)){
      margin-left: 2.5vw;
  }
`;

const Container = styled.div`
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    align-items: stretch;
    width: 90%;
  }
`;

export default function Navigation() {
  const [mobileNav, updateMobileNav] = useState(false);
  const [moreDropdownActive, updateMoreDropdownActive] = useState(false);
  const [toolsDropdownActive, updateToolsDropdownActive] = useState(false);
  return (
    <BorderedNav height={"60px"}>
      <Container>
        <NavBar.Brand>
          <LogoWrapper as={Link} to={"/"}>
            <Logo />
          </LogoWrapper>
          <Burger onClick={e => updateMobileNav(active => !active)} />
        </NavBar.Brand>
        <NavBar.Menu active={mobileNav}>
          <NavBar.Start>
            <NavLinkItem as={Link} to={"/blocks"}>
              Blocks
            </NavLinkItem>
            <NavLinkItem as={Link} to={"/names"}>
              Names
            </NavLinkItem>
            <NavLinkItem
              hoverable
              active={toolsDropdownActive}
              onClick={e => updateToolsDropdownActive(active => !active)}
              dropdown
            >
              <NavBar.Link>Tools</NavBar.Link>
              <NavBar.Dropdown>
                <NavBar.Item as={Link} to={"/status"}>
                  Node Status
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/peers"}>
                  Peers
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/airdropclaim"}>
                  Claim Your Airdrop
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/mempool"}>
                  Mempool
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/charts"}>
                  Charts
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/logs"}>
                  Logs
                </NavBar.Item>
              </NavBar.Dropdown>
            </NavLinkItem>
            <NavLinkItem
              hoverable
              active={moreDropdownActive}
              onClick={e => updateMoreDropdownActive(active => !active)}
              dropdown
            >
              <NavBar.Link>More</NavBar.Link>
              <NavBar.Dropdown>
                <NavBar.Item as={Link} to={"/changelog"}>
                  Changelog
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/docs"}>
                  API Documenation
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/config"}>
                  Config
                </NavBar.Item>
                <NavBar.Item
                  as="a"
                  href="https://github.com/HandshakeAlliance/HNScan/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report an issue&nbsp;
                  <i className="fas fa-external-link-alt has-text-grey fa-sm"></i>
                </NavBar.Item>
              </NavBar.Dropdown>
            </NavLinkItem>
          </NavBar.Start>
          <NavBar.End>
            <NavBar.Item>
              <SearchBar />
            </NavBar.Item>
          </NavBar.End>
        </NavBar.Menu>
      </Container>
    </BorderedNav>
  );
}
