import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoint, ExternalLink, NavBar, ThemeToggler } from "@urkellabs/ucl";

// Containers
import SearchBar from "containers/SearchBar";

// SVGs
import Logo from "components/svg/Logo";

const NavLinkItem = styled(NavBar.Item)`
  justify-content: center;

  ${breakpoint.upToDesktop} {
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 2.5vw;

    ${NavBar.Link} {
      padding-left: 0;
    }
  }
`;

const ThemeTogglerWrapper = styled.div`
  margin: 0 0.5rem;

  ${breakpoint.onlyMobile} {
    display: none;
  }
`;

const Burger = styled(NavBar.Burger)`
  ${breakpoint.upToDesktop} {
    margin-right: 2.5vw;
  }
`;

const LogoWrapper = styled(NavBar.Item)`
  width: 85px;
  ${breakpoint.upToDesktop} {
    margin-left: 2.5vw;
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  width: 14px;
`;

//@todo possibly integrate https://usehooks.com/useWindowSize/ to only trigger nav clicks on mobile.
export default function Navigation() {
  const [mobileNav, updateMobileNav] = useState(false);
  const [moreDropdownActive, updateMoreDropdownActive] = useState(false);
  const [toolsDropdownActive, updateToolsDropdownActive] = useState(false);
  return (
    <NavBar height={"60px"}>
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
                  <IconWrapper>
                    <ExternalLink />
                  </IconWrapper>
                </NavBar.Item>
                <NavBar.Item as={Link} to="/settings">
                  Settings
                </NavBar.Item>
              </NavBar.Dropdown>
            </NavLinkItem>
          </NavBar.Start>
          <NavBar.End>
            <NavBar.Item>
              <SearchBar />
              <ThemeTogglerWrapper>
                <ThemeToggler />
              </ThemeTogglerWrapper>
            </NavBar.Item>
          </NavBar.End>
        </NavBar.Menu>
      </NavBar.Container>
    </NavBar>
  );
}
