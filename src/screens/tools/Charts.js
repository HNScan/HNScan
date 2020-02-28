import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Flex, Tabs, Tab } from "@urkellabs/ucl";

// Containers
import DailyDifficulty from "containers/charts/DailyDifficulty";
import DailyTransactions from "containers/charts/DailyTransactions";
import TotalSupply from "containers/charts/TotalSupply";
import TotalTransactions from "containers/charts/TotalTransactions";
import TotalBurned from "containers/charts/TotalBurned";

const ChartsWrapper = styled(Flex)`
  height: 60vh;
  width: 100%;
  margin-top: 20px;
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

//@todo we need to figure out a better color scheme here as well.
//@todo would be cool to link "source" like Etherscan does, but link it to our API docs when we have them.
//@todo right now we default to difficulty for the "url"/charts -> I think we can in the future make this a lander for charts, rather than just default to difficulty similar to etherscan. Allow people to pick it out..

export default function Charts() {
  let { url } = useRouteMatch();
  return (
    <>
      <TabsWrapper>
        <Tabs>
          <Tab to={`${url}/difficulty`}>Difficulty</Tab>
          <Tab to={`${url}/dailytransactions`}>Daily TX</Tab>
          <Tab to={`${url}/totaltransactions`}>Total TX</Tab>
          <Tab to={`${url}/supply`}>Supply</Tab>
          <Tab to={`${url}/burned`}>Burned</Tab>
        </Tabs>
      </TabsWrapper>
      <ChartsWrapper align="center" columns>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={url + "/difficulty"}>
              <DailyDifficulty />
            </Route>
            <Route path={url + "/dailytransactions"}>
              <DailyTransactions />
            </Route>
            <Route path={url + "/totaltransactions"}>
              <TotalTransactions />
            </Route>
            <Route path={url + "/supply"}>
              <TotalSupply />
            </Route>
            <Route path={url + "/burned"}>
              <TotalBurned />
            </Route>
            <Redirect from={url} to={`${url}/difficulty`} />
          </Switch>
        </Suspense>
      </ChartsWrapper>
    </>
  );
}
