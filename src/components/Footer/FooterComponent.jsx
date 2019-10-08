import React, { Component } from 'react';
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
                <Footer.InternalLink to="/">
                  Home
                </Footer.InternalLink>
                <Footer.InternalLink to="/blocks">
                  Blocks
                </Footer.InternalLink>
                <Footer.InternalLink to="/names">
                  Names
                </Footer.InternalLink>
                <Footer.InternalLink to="/about">
                  About
                </Footer.InternalLink>
              </Footer.LinksContainer>
              <Footer.LinksContainer>
                <Footer.Header>
                  Tools
                </Footer.Header>
                <Footer.InternalLink to="/peers">
                  Peers
                </Footer.InternalLink>
                <Footer.InternalLink to="/status">
                  Node Status
                </Footer.InternalLink>
                <Footer.InternalLink to="/airdropclaim">
                  Airdrop Claim
                </Footer.InternalLink>
              </Footer.LinksContainer>
            </Footer.LeftLinksContainer>
            <Footer.RightLinksContainer>
              <Footer.LinksContainer>
                <Footer.Header>
                  Related
                </Footer.Header>
                <Footer.ExternalLink href="https://handshakeacademy.org" target="_blank" rel="noopener noreferrer">
                  Academy
                </Footer.ExternalLink>
                <Footer.ExternalLink href="https://handshake.community" target="_blank" rel="noopener noreferrer">
                  Community
                </Footer.ExternalLink>
                <Footer.ExternalLink href="https://urkel.io" target="_blank" rel="noopener noreferrer">
                  Urkel
                </Footer.ExternalLink>
                <Footer.ExternalLink href="https://handshake.org/files/handshake.txt" target="_blank" rel="noopener noreferrer">
                  Paper
                </Footer.ExternalLink>
              </Footer.LinksContainer>
              <Footer.LinksContainer>
                <Footer.Header>
                  Follow
                </Footer.Header>
                <Footer.ExternalLink href="https://github.com/handshakealliance" target="_blank" rel="noopener noreferrer">
                  Github
                </Footer.ExternalLink>
                <Footer.ExternalLink href="https://medium.com/@handshakealliance" target="_blank" rel="noopener noreferrer">
                  Medium
                </Footer.ExternalLink>
                <Footer.ExternalLink href="https://twitter.com/hnsalliance" target="_blank" rel="noopener noreferrer">
                  Twitter
                </Footer.ExternalLink>
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
          <div className="version">Current Version: v0.0.1 <a className="hnscan-link" href="https://github.com/HandshakeAlliance/HNScan" target="_blank" rel="noopener noreferrer">Source</a></div>
          <div className="copyright">&#9400; Handshake Alliance. All Rights Reserved.</div>
        </Footer.ToggleThemeContainer>
      </Footer.FooterContainer>
    )
  }
}

// FooterComponent.contextType = ThemeToggleContext;
export default FooterComponent;
