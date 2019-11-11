import React from "react";
import { Row, Col, Card } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

// Components
import StackedData from "components/shared/StackedData";

// Util
import { formatLargeNumber, sciNotation } from "utils/util";

function handleUnconfirmed(data, size) {
  if (data === 0) {
    return "-";
  } else {
    return `${data} txs (${size[0]} ${size[1].abbreviation}B)`;
  }
}

//@todo skeleton.
export default function NetworkSummary({ info }) {
  let hashrate = formatLargeNumber(info.hashrate, 3);
  let unconfirmed = info.unconfirmed;
  let memSize = formatLargeNumber(info.unconfirmedSize, 2);
  let network = info.network;
  let difficulty = sciNotation(info.difficulty, 3);
  let chainwork = sciNotation(parseInt("0x" + info.chainWork), 2);
  let registeredNames = info.registeredNames;

  const { t } = useTranslation();

  return (
    <Card title={t("home.network_summary")}>
      {/* ----- Network Summary - Top Row ----- */}
      <Row>
        <Col mobile={12} tablet>
          <StackedData
            label="home.hashrate"
            value={`${hashrate[0].toString()} ${hashrate[1].abbreviation}H/s`}
          />
        </Col>
        <Col mobile={12} tablet>
          <StackedData
            label="home.unconfirmed"
            value={handleUnconfirmed(unconfirmed, memSize)}
          />
        </Col>
        <Col mobile={12} tablet>
          <StackedData label="home.network" value={network} />
        </Col>
      </Row>
      <Row>
        <Col mobile={12} tablet>
          <StackedData label="Opened Names" value={registeredNames} />
        </Col>
        <Col mobile={12} tablet>
          <StackedData
            label="Difficulty"
            value={
              <>
                {difficulty[0]} x 10
                <sup>{difficulty[1]}</sup>
              </>
            }
          />
        </Col>
        <Col mobile={12} tablet>
          <StackedData
            label="Chainwork"
            value={
              <>
                {chainwork[0]} x 10
                <sup>{chainwork[1]}</sup>
              </>
            }
          />
        </Col>
      </Row>
    </Card>
  );
}
