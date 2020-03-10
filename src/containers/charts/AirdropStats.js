import React from "react";
import { DoughnutChart, Header } from "@urkellabs/ucl";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function AirdropStats() {
  // @todo make request here!

  const Wrapper = styled.div`
    position: relative;
    height: 90%;
  `;

  const Annotation = styled(Header)`
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 60px);
  `;

  const ClaimWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
    position: relative;
    z-index: 2;
  `;

  return (
    <>
      <Wrapper>
        <Annotation>
          8.3% <div>Claimed</div>
        </Annotation>
        <DoughnutChart
          chartLabel="Airdrop Claims"
          data={[
            { label: "Not Claimed", value: 300 },
            { label: "Claimed", value: 25 }
          ]}
        />
      </Wrapper>
      <ClaimWrapper>
        25/300 Claimed
        <Link to="/">Claim yours now</Link>
      </ClaimWrapper>
    </>
  );
}
