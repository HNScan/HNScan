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
            <Footer.Item>
              engineering@urkel.io
            </Footer.Item>
          </Footer.LeftContent>
          {/* All of the Footer Links */}
          <Footer.RightContent>
            <Footer.LinksContainer>
              <Footer.Header>
                Explore
              </Footer.Header>
              <Footer.Item>
                Home
              </Footer.Item>
              <Footer.Item>
                About
              </Footer.Item>
              <Footer.Item>
                Blocks
              </Footer.Item>
              <Footer.Item>
                Names
              </Footer.Item>
            </Footer.LinksContainer>
            <Footer.LinksContainer>
              <Footer.Header>
                Tools
              </Footer.Header>
              <Footer.Item>
                Peers
              </Footer.Item>
              <Footer.Item>
                Node Status
              </Footer.Item>
              <Footer.Item>
                Airdrop Claim
              </Footer.Item>
            </Footer.LinksContainer>
            <Footer.LinksContainer>
              <Footer.Header>
                Related
              </Footer.Header>
              <Footer.Item>
                Academy
              </Footer.Item>
              <Footer.Item>
                Community
              </Footer.Item>
              <Footer.Item>
                Urkel Labs
              </Footer.Item>
              <Footer.Item>
                Paper
              </Footer.Item>
            </Footer.LinksContainer>
            <Footer.LinksContainer>
              <Footer.Header>
                Follow
              </Footer.Header>
              <Footer.Item>
                Github
              </Footer.Item>
              <Footer.Item>
                Medium
              </Footer.Item>
              <Footer.Item>
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
