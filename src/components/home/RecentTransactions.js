import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Flex, Col } from "@urkellabs/ucl";
import { useTranslation, Trans } from "react-i18next";

// Components
import {
  SummaryItem,
  LeftItemDetail,
  RightItemDetail,
  ItemLogo
} from "./styled-components";

// SVGs
import Arrow from "components/svg/RightArrow";

// Util
import { truncateHash, timeAgo, hnsValues, sumTxOutputs } from "utils/util";

const Transaction = ({ tx }) => {
  return (
    // ----- TX Details -----
    <Col>
      <SummaryItem>
        {/* ----- Left Side / Top Side ----- */}
        <Col mobile={9}>
          <LeftItemDetail>
            <ItemLogo>
              <Arrow />
            </ItemLogo>
            <Trans
              i18nKey="home.tx_num"
              values={{ hash: truncateHash(tx.hash) }}
            >
              <Link to={"/tx/" + tx.hash}></Link>
            </Trans>
          </LeftItemDetail>
          <LeftItemDetail>
            <Trans
              i18nKey="home.amount"
              values={{ amount: hnsValues(sumTxOutputs(tx.outputs)) }}
            />
          </LeftItemDetail>
          <LeftItemDetail>
            <Trans i18nKey="home.fee" values={{ fee: hnsValues(tx.fee) }} />
          </LeftItemDetail>
        </Col>
        {/* ----- Right Side / Bottom Side ----- */}
        <Col>
          <RightItemDetail>
            <em>{timeAgo(tx.time)}</em>
          </RightItemDetail>
        </Col>
      </SummaryItem>
    </Col>
  );
};

export default function RecentTransactions({ txs }) {
  const txRows = txs.map((tx, index) => <Transaction key={index} tx={tx} />);
  const { t } = useTranslation();

  return (
    <Card title={t("home.recent_transactions")}>
      <Flex columns>{txRows}</Flex>
    </Card>
  );
}

RecentTransactions.propTypes = {
  txs: PropTypes.array
};
