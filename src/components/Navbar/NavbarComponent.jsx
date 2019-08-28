import React, { Component } from 'react';
import './Navbar.scss';
import Logo from '../Logos/hnscan';
import * as Navbar from './styled-components';

export default class NavbarComponent extends Component {
  // hide/show the mobile nav
  toggleMobileNav() {
    console.log('toggling!');
  }

  // handle all search results
  search() {
    console.log('searching!');
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbarContainer">

          {/* ----- Navigation Menu ----- */}
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <Navbar.LogoWrapper>
                <Logo />
              </Navbar.LogoWrapper>
            </a>

            {/* Mobile Nav Menu */}
            <button className="navbar-burger burger"
              onClick={this.toggleMobileNav}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          {/* Standard Nav Menu */}
          <div id="navbarBasicExample" className="navbar-menu">
            {/* // TODO: Remove this inline styling */}
            <div className="navbar-start" style={{width: '100%'}}>
              <a href="/blocks" id="blocks" className="navbar-item navOption">Blocks</a>
              <a href="/names" className="navbar-item navOption">Names</a>
              <div className="navbar-item has-dropdown is-hoverable navDropdown">
                <button className="navbarMore navbar-link navOption">Tools</button>
                <div className="navbar-dropdown is-hidden-touch">
                  <a href="/status" className="navbar-item">Node Status</a>
                  <a href="/peers" className="navbar-item">Peers</a>
                  <a href="/airdropclaim" className="navbar-item">Claim Your Airdrop</a>
                  {/* <a href="/airairdrop" className="navbar-item">Airdrop Stats</a> */}
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable navDropdown">
                <button className="navbarMore navbar-link navOption">More</button>
                <div className="navbar-dropdown is-hidden-touch">
                  <a href="/about" className="navbar-item">About</a>
                  {/* <hr className="navbar-divider" /> */}
                  <a href="https://github.com/HandshakeAlliance/HNScan/issues"
                    className="navbar-item"
                    target="_blank"
                    rel="noopener noreferrer">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field">
                  {/* TODO submit */}
                  <form className="control has-icons-left" onSubmit={this.search}>
                    <button className="hiddenSearchSubmit" type="submit"></button>
                    <input type="search"
                      className="input is-rounded searchbar"
                      placeholder="Search the HNS Blockchain"
                      maxLength="64" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-search"></i>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
