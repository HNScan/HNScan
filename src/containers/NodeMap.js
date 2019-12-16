import React, { useEffect } from "react";
import styled from "styled-components";
import { Card, useQuery, Map } from "@urkellabs/ucl";

const MapWrapper = styled(Card)`
  // min-height: 500px;
  height: 500px;
`;

export default function PeersMap() {
  const { data } = useQuery("/mapdata");

  return (
    <MapWrapper>
      <Map data={data} />
    </MapWrapper>
  );
}
