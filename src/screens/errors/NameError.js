import React from "react";
import { Flex, Header, Text, Container } from "@urkellabs/ucl";

import styled from "styled-components";

const Center = styled(Flex)`
  flex: 1;
  width: 100%;
  padding: 50px;
  margin-top: 50px;
`;

export default class NameError extends React.Component {
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
            <Header>{this.props.name} is an invalid name.</Header>
            <Text>
              As a quick reminder, the following are brief naming rules that
              define valid Handshake names:
            </Text>
            <Flex align="flex-start" justify="flex-start">
              <ul>
                <li>
                  The name must be at least 1 character but less than 64
                  characters.
                </li>
                <li>
                  The valid set of characters is between 0-9 and a-z as well as
                  "-" and "_". Capitals are not allowed.
                </li>
                <li>Unicode characters are NOT allowed.</li>
                <li>The name can not start or end with "-" or "_"</li>
                <li>
                  The name must not belong in the{" "}
                  <a
                    href="https://github.com/handshake-org/hsd/blob/master/lib/covenants/rules.js#L85-L91"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    blacklist
                  </a>
                </li>
              </ul>
            </Flex>
          </Center>
        </Container>
      );
    }

    return this.props.children;
  }
}
