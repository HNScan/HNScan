import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Card,
  Flex,
  Col,
  Row,
  Spacer,
  Text,
  breakpoint,
  EmptyState
} from "@urkellabs/ucl";
import { useTranslation, Trans } from "react-i18next";
import { useHistory } from "react-router-dom";

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
                values={{ hash: truncateHash(tx.tx_id) }}
              >
                <Link to={"/tx/" + tx.tx_id}></Link>
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
  const { t } = useTranslation();
  let history = useHistory();

  if (txs.length === 0) {
    return (
      <Card title={t("home.recent_transactions")}>
        <EmptyState
          header="No transactions yet"
          icon={<Arrow />}
          action={() => {
            history.push("/status");
          }}
          actionTitle="Check Node Status"
        />
      </Card>
    );
  }

  const txRows = txs.map((tx, index) => <Transaction key={index} tx={tx} />);

  return <Card title={t("home.recent_transactions")}>{txRows}</Card>;
}

RecentTransactions.propTypes = {
  txs: PropTypes.array
};
