import React from "react";
import { Flex, Header, Text, Container } from "@urkellabs/ucl";

import styled from "styled-components";

// Components
import NetworkSwitcher from "components/shared/NetworkSwitcher";

const Center = styled(Flex)`
  height: 100vh;
  width: 100%;
  padding: 50px;
`;

const NetworkSwitcherWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default class NetworkBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // Solitude?
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container>
          <Center align="center" justify="center" columns>
            <Header>
              Looks your connection to a node is offline. Want to try a
              different network?
            </Header>
            <Text>Select a new network, and refresh your browser</Text>
            <NetworkSwitcherWrapper>
              <NetworkSwitcher />
            </NetworkSwitcherWrapper>
            <Text>
              If you are trying to run HNScan locally, follow the node setup
              instructions here:{" "}
              <a href="https://github.com/HandshakeAlliance/HNScan">
                HNScan Github
              </a>
            </Text>
          </Center>
        </Container>
      );
    }

    return this.props.children;
  }
}

//@todo when switching networks, show if the connection worked. Then navigate the user back to the home page.
//@todo maybe link to a local document page on HNScan for the node setup.
