import React, { Component } from 'react';
import './Footer.scss';
import Logo from '../Logos/hnscan';
import * as Footer from './styled-components';

export default class FooterComponent extends Component {
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
                Urkel Labs
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
          </Footer.RightContent>
        </Footer.ContentContainer>
        {/* Theme toggle switch and version */}
        <Footer.ToggleThemeContainer>
        </Footer.ToggleThemeContainer>

      </Footer.FooterContainer>
    )
  }
}
