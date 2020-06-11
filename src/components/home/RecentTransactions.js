import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, Flex, Col, Row, Spacer, Text, breakpoint } from "@urkellabs/ucl";
import { useTranslation, Trans } from "react-i18next";

// Components
import Link from "components/Link";

// SVGs
import Arrow from "components/svg/RightArrow";

// Util
import { truncateHash, timeAgo, hnsValues } from "utils/util";

let ArrowIcon = styled(Arrow)`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

let Time = styled(Flex)`
  ${breakpoint.tablet} {
    justify-content: flex-end;
  }
`;

const Transaction = ({ tx }) => {
  return (
    <Row>
      <Spacer px={10} />
      <Col mobile={12} tablet>
        <Flex columns>
          <Flex>
            <ArrowIcon />
            <Text small>
              <Trans
                i18nKey="home.tx_num"
                values={{ hash: truncateHash(tx.txid) }}
              >
                <Link to={"/tx/" + tx.hash}></Link>
              </Trans>
            </Text>
          </Flex>
          <Flex>
            <Text small>
              <Trans
                i18nKey="home.amount"
                values={{ amount: hnsValues(tx.value) }}
              />
            </Text>
          </Flex>
          <Text small>
            <Trans i18nKey="home.fee" values={{ fee: hnsValues(tx.fee) }} />
          </Text>
        </Flex>
      </Col>
      <Col mobile={12} tablet>
        {/* @todo instead of putting time here, it would be cool to put the Transaction type. */}
        <Time>
          <Text small>{timeAgo(tx.time)}</Text>
        </Time>
      </Col>
      <Spacer px={10} />
    </Row>
  );
};

export default function RecentTransactions({ txs }) {
  const txRows = txs.map((tx, index) => <Transaction key={index} tx={tx} />);
  const { t } = useTranslation();

  return <Card title={t("home.recent_transactions")}>{txRows}</Card>;
}

RecentTransactions.propTypes = {
  txs: PropTypes.array
};
