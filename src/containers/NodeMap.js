import React from "react";
import styled from "styled-components";
import { Card, useQuery, Map } from "@urkellabs/ucl";

const Wrapper = styled.div`
  height: 55vh;
  width: 100%;
`;

export default function NodeMap() {
  const { data } = useQuery("/mapdata");

  return (
    <Wrapper>
      <Card fullHeight>
        <Map data={data.data} />
      </Card>
    </Wrapper>
  );
}
