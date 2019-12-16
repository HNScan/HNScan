import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "@urkellabs/ucl";

// Containers
import DailyDifficulty from "containers/charts/DailyDifficulty";

const Wrapper = styled(Flex)`
  height: 60vh;
  width: 100%;
`;

//@todo we need to figure out a better color scheme here as well.
//@todo would be cool to link "source" like Etherscan does, but link it to our API docs when we have them.
//@todo right now we default to difficulty for the "url"/charts -> I think we can in the future make this a lander for charts, rather than just default to difficulty similar to etherscan. Allow people to pick it out..

export default function Charts() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Wrapper align="center" columns>
          <Suspense fallback={<div>Loading...</div>}>
            <DailyDifficulty />
          </Suspense>
        </Wrapper>
      </Route>
    </Switch>
  );
}
