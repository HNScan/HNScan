import React from "react";
import styled from "styled-components";
import { Trans } from "react-i18next";

import Link from "components/Link";

// Util
//@todo rename to toHNS()
import { hnsValues } from "utils/util";

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

const PutsWrapper = styled.div`
  padding: 10px;
  text-align: center;
`;

function renderInput(input) {
  if (input.coinbase) {
    return (
      <Trans
        i18nKey="puts_list.input_from_reward"
        values={{ value: hnsValues(input.value) }}
      />
    );
  } else if (input.airdrop) {
    return <Trans i18nKey="puts_list.airdrop_claim" />;
  } else {
    return (
      <Trans
        i18nKey="puts_list.input_from"
        values={{ value: hnsValues(input.value), address: input.address }}
      >
        <Link to={"/address/" + input.address}></Link>
      </Trans>
    );
  }
}

export const InputList = props => {
  const inputs = props.inputs.map((input, index) => (
    <PutsWrapper key={index}>{renderInput(input)}</PutsWrapper>
  ));

  return (
    <Container>
      <Title>
        <Trans i18nKey="puts_list.input" count={inputs.length} />
      </Title>
      <DataContainer>{inputs}</DataContainer>
    </Container>
  );
};

const renderOutputAction = output => {
  if (output.action === "NONE") {
    return (
      <Trans
        i18nKey="puts_list.output_to"
        values={{ value: hnsValues(output.value), address: output.address }}
      >
        <Link to={"/address/" + output.address}></Link>
      </Trans>
    );
  } else if (output.action === "BID") {
    return (
      <Trans
        i18nKey="puts_list.output_for_of"
        values={{
          action: output.action,
          name: output.name,
          value: hnsValues(output.value)
        }}
      >
        <Link to={"/name/" + output.name}></Link>
      </Trans>
    );
  } else {
    return (
      <Trans
        i18nKey="puts_list.output_for"
        values={{ action: output.action, name: output.name }}
      >
        <Link to={"/name/" + output.name}></Link>
      </Trans>
    );
  }
};

export const OutputList = props => {
  const outputs = props.outputs.map((output, index) => (
    <PutsWrapper key={index}>{renderOutputAction(output)}</PutsWrapper>
  ));

  return (
    <Container>
      <Title>
        <Trans i18nKey="puts_list.output" count={outputs.length} as={Title} />
      </Title>
      <DataContainer>{outputs}</DataContainer>
    </Container>
  );
};
