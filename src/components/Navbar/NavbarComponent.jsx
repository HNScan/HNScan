import React, { Component } from 'react';
import './Navbar.scss';

export default class NavbarComponent extends Component {
  toggleMobileNav() {
    console.log('toggling!')
  }

  search() {
    console.log('searching!')
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbarContainer">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              {/* TODO include logo.svg here!!! */}
            </a>
            <a className="navbar-burger burger"
              role="button"
              onClick={this.toggleMobileNav}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start" style={{width: '100%'}}>
              <a href="/blocks" id="blocks" className="navbar-item">Blocks</a>
              <a href="/names" className="navbar-item navOption">Names</a>
              <div className="navbar-item has-dropdown is-hoverable navDropdown">
                <a className="navbarMore navbar-link navOption">Tools</a>
                <div className="navbar-dropdown is-hidden-touch">
                  <a href="/status" className="navbar-item">Node Status</a>
                  <a href="/peers" className="navbar-item">Peers</a>
                  <a href="/airdropclaim" className="navbar-item">Claim Your Airdrop</a>
                  {/* <a href="/airairdrop" className="navbar-item">Airdrop Stats</a> */}
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable navDropdown">
                <a className="navbarMore navbar-link navOption">More</a>
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