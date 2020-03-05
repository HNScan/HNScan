import React, { Suspense } from "react";
import styled from "styled-components";
import { Row, Col } from "@urkellabs/ucl";

// Containers
import DailyDifficulty from "containers/charts/DailyDifficulty";
import DailyTransactions from "containers/charts/DailyTransactions";
import TotalSupply from "containers/charts/TotalSupply";
import TotalTransactions from "containers/charts/TotalTransactions";
import TotalBurned from "containers/charts/TotalBurned";

const ChartsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CustomCol = styled(Col)`
  height: 500px;
  margin-top: 48px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  * {
    width: 100%;
  }
`;

//@todo would be cool to link "source" like Etherscan does, but link it to our API docs when we have them.
//@todo right now we default to difficulty for the "url"/charts -> I think we can in the future make this a lander for charts, rather than just default to difficulty similar to etherscan. Allow people to pick it out..

export default function Charts() {
  return (
    <>
      <ChartsWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Row>
            <CustomCol mobile={12} desktop={6}>
              <DailyDifficulty />
            </CustomCol>
            <CustomCol mobile={12} desktop={6}>
              <DailyTransactions />
            </CustomCol>
            <CustomCol mobile={12} desktop={6}>
              <TotalTransactions />
            </CustomCol>
            <CustomCol mobile={12} desktop={6}>
              <TotalSupply />
            </CustomCol>
            <CustomCol mobile={12} desktop={12}>
              <TotalBurned />
            </CustomCol>
          </Row>
        </Suspense>
      </ChartsWrapper>
    </>
  );
}
