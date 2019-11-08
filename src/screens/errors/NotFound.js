import React, { Component } from "react";
import styled from "styled-components";

//SVGs
import Logo from "components/svg/Block";

const Wrapper = styled.div`
  width: 80%;
  margin: 50px auto 60px auto;
  border-radius: 10px;
  display: flex;
  min-height: 500px;
  text-align: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: $tablet) {
    width: 95%;
  }
`;

const Header = styled.h1`
  font-size: 64px;
  font-weight: 700;
`;

const Subtext = styled.div`
  font-size: 12px;
`;

const Container404 = styled.div`
  display: flex;
  font-size: 108px;
`;

const HugeBlock = styled.div`
  width: 80px;
  height: auto;
  opacity: 0.7;
  margin-right: 4px;
`;

export default class NotFoundScreen extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <span>Oh no!</span>
          <span> Where'd it go?</span>
        </Header>
        <Subtext>
          It's cold out here in the void...let's bring you back to
          <a href="/" rel="noopener noreferrer">
            {" "}
            safety
          </a>
        </Subtext>
        <Container404>
          <span>4</span>
          <HugeBlock>
            <Logo />
          </HugeBlock>
          <span>4</span>
        </Container404>
      </Wrapper>
    );
  }
}
