import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

//Flexbox Helpers
// import FlexColumn from "Flex/FlexColumn.js";
import { Flex } from "@urkellabs/ucl";

//SVG
// import CloseButton from "SVG/CloseButton.js";

const Header = styled(Flex)`
  position: relative;
  height: 64px;
  padding: 0px 24px;
  border-bottom: 1px solid rgb(218, 225, 233);
`;

// const Title = styled(HeaderMedium)`
const Title = styled.h2`
  position: relative;
  font-size: 18px;
`;

const Close = styled.div`
  width: 18px;
  height: 18px;
  margin-left: auto;
  fill: rgb(155, 166, 178);
  cursor: pointer;
  transition: fill 0.15s ease 0s;
  &:hover {
    fill: rgb(78, 92, 110);
  }
`;

class ModalHeader extends Component {
  render() {
    return (
      <Header align={"center"}>
        <Title>{this.props.title}</Title>
        <Close onClick={this.props.closeFunction}>
          {/* <CloseButton /> */}
        </Close>
      </Header>
    );
  }
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .5;
  }
`;

//Hide overflow.
const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 9;
  display: ${props => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: flex-start;
  overflow: scroll;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 8;
  display: ${props => (props.show ? "flex" : "none")};
  // background-color: rgba(26, 54, 80, 0.7);
  // background-color: rgba(255, 255, 255, 0.75);
  justify-content: center;
  align-items: flex-start;
  overflow: scroll;
  background-color: ${props => props.theme.global.background};
  animation: ${fadeIn} 0.15s ease;
  animation-fill-mode: forwards;
`;

const Content = styled.div`
  position: static;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  border: none;
  background: rgb(255, 255, 255);
  overflow: visible;
  border-radius: 4px;
  outline: none;
  padding: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  margin: auto 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px;
  @media (min-width: 768px) {
    height: auto;
    width: auto;
  }
`;

//Needs to be Create Portal
export default class Modal extends Component {
  handleContentClick = e => {
    //Stops click from going to the parent
    e.stopPropagation();
  };

  render() {
    return (
      <Container show={this.props.show} onClick={this.props.closeFunction}>
        <Content onClick={this.handleContentClick}>
          <Flex columns>
            <ModalHeader
              title={this.props.title}
              closeFunction={this.props.closeFunction}
            />
            {this.props.children}
          </Flex>
        </Content>
        <Overlay show={this.props.show} />
      </Container>
    );
  }
}
