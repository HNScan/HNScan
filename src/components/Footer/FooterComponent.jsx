import React, { Component } from 'react';
import { ThemeToggleContext } from '../../contexts/ThemeContext';
import './Footer.scss';
import Logo from '../Logos/hnscan';
import * as Footer from './styled-components';

class FooterComponent extends Component {

  render() {
    return (
      <Footer.FooterContainer>
        <Footer.ContentContainer>
          {/* Company contact info */}
          <Footer.LeftContent>
            <Logo />
            <Footer.Tagline>
              Your trusted source for on chain Handshake information
            </Footer.Tagline>
            <Footer.Header>
              Contact
            </Footer.Header>
            <Footer.ContactItem>
              engineering@urkel.io
            </Footer.ContactItem>
          </Footer.LeftContent>
          {/* All of the Footer Links */}
          <Footer.RightContent>
            <Footer.LeftLinksContainer>
              <Footer.LinksContainer>
                <Footer.Header>
                  Explore
                </Footer.Header>
                <Footer.Item href="/">
                  Home
                </Footer.Item>
                <Footer.Item href="/blocks">
                  Blocks
                </Footer.Item>
                <Footer.Item href="/names">
                  Names
                </Footer.Item>
                <Footer.Item href="/about">
                  About
                </Footer.Item>
              </Footer.LinksContainer>
              <Footer.LinksContainer>
                <Footer.Header>
                  Tools
                </Footer.Header>
                <Footer.Item href="/peers">
                  Peers
                </Footer.Item>
                <Footer.Item href="/status">
                  Node Status
                </Footer.Item>
                <Footer.Item href="/airdropclaim">
                  Airdrop Claim
                </Footer.Item>
              </Footer.LinksContainer>
            </Footer.LeftLinksContainer>
            <Footer.RightLinksContainer>
              <Footer.LinksContainer>
                <Footer.Header>
                  Related
                </Footer.Header>
                <Footer.Item href="https://handshakeacademy.org" target="_blank" rel="noopener noreferrer">
                  Academy
                </Footer.Item>
                <Footer.Item href="https://handshake.community" target="_blank" rel="noopener noreferrer">
                  Community
                </Footer.Item>
                <Footer.Item href="https://urkel.io" target="_blank" rel="noopener noreferrer">
                  Urkel
                </Footer.Item>
                <Footer.Item href="https://handshake.org/files/handshake.txt" target="_blank" rel="noopener noreferrer">
                  Paper
                </Footer.Item>
              </Footer.LinksContainer>
              <Footer.LinksContainer>
                <Footer.Header>
                  Follow
                </Footer.Header>
                <Footer.Item href="https://github.com/handshakealliance" target="_blank" rel="noopener noreferrer">
                  Github
                </Footer.Item>
                <Footer.Item href="https://medium.com/@handshakealliance" target="_blank" rel="noopener noreferrer">
                  Medium
                </Footer.Item>
                <Footer.Item href="https://twitter.com/hnsalliance" target="_blank" rel="noopener noreferrer">
                  Twitter
                </Footer.Item>
              </Footer.LinksContainer>
            </Footer.RightLinksContainer>
          </Footer.RightContent>
        </Footer.ContentContainer>

        {this.context.isDark}
        <Footer.ToggleThemeContainer>
          <div className="field">
            <input id="switchRoundedOutlinedDefault"
              className="switch is-rounded is-outlined"
              defaultChecked={this.context.isDark}
              name="switchRoundedOutlinedDefault"
              type="checkbox"
              onChange={this.context.toggleTheme} />
            <label htmlFor="switchRoundedOutlinedDefault"></label>
          </div>
          <div className="version">Current Version: v0.0.1 <a className="hnscan-link" href="https://github.com/HandshakeAlliance/HNScan" target="_blank">Source</a></div>
          <div className="copyright">&#9400; Handshake Alliance. All Rights Reserved.</div>
        </Footer.ToggleThemeContainer>
      </Footer.FooterContainer>
    )
  }
}

FooterComponent.contextType = ThemeToggleContext;
export default FooterComponent;
