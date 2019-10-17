import React from "react";
import styled from "styled-components";

//@todo make this an svg.
import Logo from "../Logos/hnscan";
import { Link } from "react-router-dom";

import ThemeToggler from "../ThemeToggler";

//@todo I really want this to be a span.
const SubText = styled.div`
  font-size: 8px;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 25px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin-bottom: 50px;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 90%;
    max-width: 1216px;
  }
`;

export const LeftContent = styled.div`
  height: 100%;
  text-align: center;
  max-width: 200px;

  @media (min-width: 1024px) {
    text-align: left;
    flex-direction: row;
    min-width: 200px;
    max-width: none;
  }
`;

export const Tagline = styled.div`
  margin-bottom: 20px;
`;

export const Header = styled.div`
  color: ${props => props.theme.global.textColor};
  text-transform: uppercase;
  font-size: 10pt;
  letter-spacing: 1px;
  font-weight: 700;
  width: 100%;
`;

export const ContactItem = styled.div`
  font-size: 10pt;
  margin: 5px 0;
`;

// External Links using <a>
export const FooterLink = styled.a`
  font-size: 10pt;
  margin: 8px 0;
  width: 55%;
  color: ${props => props.theme.global.textColor};

  &:hover {
    color: ${props => props.theme.global.linkColorHover};
  }

  @media (min-width: 445px) {
    margin: 5px 0;
  }
`;

export const RightContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 50px;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const LeftLinksContainer = styled.div`
  height: auto;
  display: flex;
  margin-bottom: 30px;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: row;

  @media (min-width: 445px) {
    margin-bottom: 0;
  }
`;

export const RightLinksContainer = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: row;
`;

export const LinksContainer = styled.div`
  height: auto;
  min-width: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

// ----- Toggle Switch and Copyright -----
export const ToggleThemeContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <ContentContainer>
        <LeftContent>
          <Logo />
          <Tagline>
            Your trusted source for on chain Handshake information
          </Tagline>
          <Header>Contact</Header>
          <ContactItem>engineering@urkel.io</ContactItem>
        </LeftContent>
        <RightContent>
          <LeftLinksContainer>
            <LinksContainer>
              <Header>Explore</Header>
              <FooterLink as={Link} to="/">
                Home
              </FooterLink>
              <FooterLink as={Link} to="/blocks">
                Blocks
              </FooterLink>
              <FooterLink as={Link} to="/names">
                Names
              </FooterLink>
              <FooterLink as={Link} to="/about">
                About
              </FooterLink>
            </LinksContainer>
            <LinksContainer>
              <Header>Tools</Header>
              <FooterLink as={Link} to="/peers">
                Peers
              </FooterLink>
              <FooterLink as={Link} to="/status">
                Node Status
              </FooterLink>
              <FooterLink as={Link} to="/airdropclaim">
                Airdrop Claim
              </FooterLink>
            </LinksContainer>
          </LeftLinksContainer>
          <RightLinksContainer>
            <LinksContainer>
              <Header>
                Related&nbsp;
                <i className="fas fa-external-link-alt has-text-grey fa-sm"></i>
              </Header>
              <FooterLink
                href="https://handshakeacademy.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Academy
              </FooterLink>
              <FooterLink
                href="https://handshake.community"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community
              </FooterLink>
              <FooterLink
                href="https://urkel.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urkel
              </FooterLink>
              <FooterLink
                href="https://handshake.org/files/handshake.txt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Paper
              </FooterLink>
            </LinksContainer>
            <LinksContainer>
              <Header>
                Follow&nbsp;
                <i className="fas fa-external-link-alt has-text-grey fa-sm"></i>
              </Header>
              <FooterLink
                href="https://github.com/handshakealliance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </FooterLink>
              <FooterLink
                href="https://medium.com/@handshakealliance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </FooterLink>
              <FooterLink
                href="https://twitter.com/hnsalliance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </FooterLink>
            </LinksContainer>
          </RightLinksContainer>
        </RightContent>
      </ContentContainer>
      <ToggleThemeContainer>
        <div className="field">
          <ThemeToggler />
        </div>
        <SubText>
          Current Version: v0.0.1{" "}
          <a
            href="https://github.com/HandshakeAlliance/HNScan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </SubText>
        <SubText>&#9400; Handshake Alliance. All Rights Reserved.</SubText>
      </ToggleThemeContainer>
    </FooterContainer>
  );
}
