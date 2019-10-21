import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Util
//@todo rename to toHNS()
import { hnsValues, title } from "utils/util";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const DataContainer = styled.div`
  width: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  padding: 10px;
  text-align: center;
`;

const OutputWrapper = styled.div`
  padding: 10px;
`;

function renderInput(input) {
  if (input.coinbase) {
    return <span>{hnsValues(input.value)} from Block Reward</span>;
  } else if (input.airdrop) {
    return <span>Airdrop Claim</span>;
  } else {
    return (
      <span>
        {hnsValues(input.value)} from{" "}
        <Link to={"/address/" + input.address}>{input.address}</Link>
      </span>
    );
  }
}

export const InputList = props => {
  const inputs = props.inputs.map((input, index) => (
    <InputWrapper key={index}>{renderInput(input)}</InputWrapper>
  ));

  return (
    <Container>
      <Title>{title(inputs.length, "Input")}</Title>
      <DataContainer>{inputs}</DataContainer>
    </Container>
  );
};

const renderOutputAction = output => {
  if (output.action === "NONE") {
    return (
      <span>
        {hnsValues(output.value)} to{" "}
        <Link to={"/address/" + output.address}>{output.address}</Link>
      </span>
    );
  } else if (output.action === "BID") {
    return (
      <span>
        {output.action} for{" "}
        <Link to={"/name/" + output.name}>{output.name}</Link> of{" "}
        {hnsValues(output.value)}
      </span>
    );
  } else {
    return (
      <span>
        {output.action} for{" "}
        <Link to={"/name/" + output.name}>{output.name}</Link>
      </span>
    );
  }
};

export const OutputList = props => {
  const outputs = props.outputs.map((output, index) => (
    <OutputWrapper key={index}>{renderOutputAction(output)}</OutputWrapper>
  ));

  return (
    <Container>
      <Title>{title(outputs.length, "Output")}</Title>
      <DataContainer>{outputs}</DataContainer>
    </Container>
  );
};
