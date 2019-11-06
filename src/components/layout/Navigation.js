import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styles
import NavBar from "components/styles/NavBar";

// Containers
import SearchBar from "containers/SearchBar";

// SVGs
import Logo from "components/svg/Logo";

//@todo move completely to styled components (Pagination Nav, is-centered).
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
  width: 85px;
  @media (max-width: calc(${props => props.theme.breakpoints.desktop} - 1px)){
      margin-left: 2.5vw;
  }
`;

//@todo possibly integrate https://usehooks.com/useWindowSize/ to only trigger nav clicks on mobile.
export default function Navigation() {
  const [mobileNav, updateMobileNav] = useState(false);
  const [moreDropdownActive, updateMoreDropdownActive] = useState(false);
  const [toolsDropdownActive, updateToolsDropdownActive] = useState(false);
  return (
    <BorderedNav height={"60px"}>
      <NavBar.Container>
        <NavBar.Brand>
          <LogoWrapper as={Link} to={"/"}>
            <Logo />
          </LogoWrapper>
          <Burger
            active={mobileNav}
            onClick={e => updateMobileNav(active => !active)}
          />
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
              <NavBar.Dropdown
                onClick={e => {
                  e.stopPropagation();
                  updateMobileNav(active => (active ? !active : active));
                  updateToolsDropdownActive(active =>
                    active ? !active : active
                  );
                }}
              >
                <NavBar.Item as={Link} to={"/status"}>
                  Node Status
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/peers"}>
                  Peers
                </NavBar.Item>
                {/* <NavBar.Item as={Link} to={"/airdropclaim"}>
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
                </NavBar.Item> */}
              </NavBar.Dropdown>
            </NavLinkItem>
            <NavLinkItem
              hoverable
              active={moreDropdownActive}
              onClick={e => updateMoreDropdownActive(active => !active)}
              dropdown
            >
              <NavBar.Link>More</NavBar.Link>
              <NavBar.Dropdown
                onClick={e => {
                  e.stopPropagation();
                  updateMobileNav(active => (active ? !active : active));
                  updateMoreDropdownActive(active =>
                    active ? !active : active
                  );
                }}
              >
                {/*}
                <NavBar.Item as={Link} to={"/changelog"}>
                  Changelog
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/docs"}>
                  API Documenation
                </NavBar.Item>
                <NavBar.Item as={Link} to={"/config"}>
                  Config
                </NavBar.Item> */}
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
      </NavBar.Container>
    </BorderedNav>
  );
}
