import React, { Component } from 'react';

import styled from 'styled-components';

const StackedWrapper = styled.td`
  display: flex;
  flex-direction: column;
`;

const StackedElement = styled.span`
  font-size: 12px;
  word-wrap: break-word;
  word-break: break-all;
`;

const StackedLabel = styled.span`
  font-weight: 800;
  font-size: 14px;
`;

export default class StackedComponent extends Component {
  render() {
    return (
      <StackedWrapper>
        <StackedLabel>{this.props.label}</StackedLabel>
        <StackedElement>{this.props.value}</StackedElement>
      </StackedWrapper>
    );
  }
}
