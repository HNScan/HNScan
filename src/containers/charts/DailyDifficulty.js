import React from "react";
import { useQuery, Card, Header, TimeSeries } from "@urkellabs/ucl";
import styled from "styled-components";

const FullHeightCard = styled(Card)`
  height: 50vh;
  margin-top: 25px;
`;

export default function DailyDifficulty() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/difficulty", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <>
      <Header>Daily Average Difficulty</Header>
      <FullHeightCard>
        <TimeSeries data={data} />
      </FullHeightCard>
    </>
  );
}
