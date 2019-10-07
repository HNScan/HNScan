import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "./Logos/hnscan";
import NavBar from "./styles/NavBar";

const BorderedNav = styled(NavBar)`
  border-bottom: 1px solid ${props => props.theme.nav.borderColor};
  // box-shadow: 0px 1px 12px -1px rgba(0,0,0,0.30);
`;

const NavLink = styled(NavBar.Item)`
  padding: 10px 25px;
  justify-content: center;
`;

export default function Navigation() {
  const [mobileNav, updateMobileNav] = useState(false);
  const [moreDropdownActive, updateMoreDropdownActive] = useState(false);
  console.log(mobileNav);
  return (
    <BorderedNav>
      <NavBar.Brand>
        <NavBar.Item as={Link} to={"/"}>
          <Logo />
        </NavBar.Item>
        <NavBar.Burger onClick={e => updateMobileNav(active => !active)} />
      </NavBar.Brand>
      <NavBar.Menu active={mobileNav}>
        <NavBar.Start>
          <NavLink as={Link} to={"/blocks"}>
            Blocks
          </NavLink>
          <NavLink as={Link} to={"/names"}>
            Names
          </NavLink>
          <NavBar.Item hoverable>
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
          </NavBar.Item>
          <NavBar.Item
            hoverable
            active={moreDropdownActive}
            onClick={e => updateMoreDropdownActive(active => !active)}
          >
            <NavBar.Link>More</NavBar.Link>
            <NavBar.Dropdown>
              <NavBar.Item as={Link} to={"/about"}>
                About
              </NavBar.Item>
              <NavBar.Item as={Link} to={"/changelog"}>
                Changelog
              </NavBar.Item>
              <NavBar.Item as={Link} to={"/docs"}>
                API Documenation
              </NavBar.Item>
              <NavBar.Item
                as="a"
                href="https://github.com/HandshakeAlliance/HNScan/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <SearchBar />
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </BorderedNav>
  );
}
