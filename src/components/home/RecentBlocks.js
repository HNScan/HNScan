import React from "react";
import { Link } from "react-router-dom";
import { Card, Flex, Col, Tooltip } from "@urkellabs/ucl";
import { useTranslation, Trans } from "react-i18next";

// Components
import {
  SummaryItem,
  ItemLogo,
  LeftItemDetail,
  RightItemDetail
} from "./styled-components";

// SVGs
import BlockLogo from "components/svg/Block";

// Util
import { humanizeTimestamp, truncateHash, timeAgo } from "utils/util";

const BlockCardItem = ({ block }) => {
  return (
    <Col>
      <SummaryItem>
        <Col>
          <LeftItemDetail>
            <ItemLogo>
              <BlockLogo />
            </ItemLogo>
            <Trans i18nKey="home.block_num" values={{ height: block.height }}>
              <Link to={"/block/" + block.height}></Link>
            </Trans>
          </LeftItemDetail>
          <LeftItemDetail>
            <Trans
              i18nKey="home.mined_by"
              values={{ miner: truncateHash(block.miner) }}
            >
              <Link to={"/address/" + block.miner}>
                {/* @todo check pool */}
              </Link>
            </Trans>
          </LeftItemDetail>
          <LeftItemDetail>
            <Trans
              i18nKey="home.transactions"
              values={{ tx_num: block.tx.length }}
            />
          </LeftItemDetail>
        </Col>
        <Col>
          <RightItemDetail>
            <Tooltip
              trigger="mouseenter"
              touchHold
              title={humanizeTimestamp(block.time)}
            >
              <em>{timeAgo(block.time)}</em>
            </Tooltip>
          </RightItemDetail>
        </Col>
      </SummaryItem>
    </Col>
  );
};

export default function RecentBlocks({ blocks }) {
  const { t } = useTranslation();
  const blockRows = blocks.map((block, index) => (
    <BlockCardItem key={index} block={block} />
  ));
  return (
    <Card
      title={t("home.recent_blocks")}
      headerAction={<Link to="/blocks"></Link>}
    >
      <Flex columns>{blockRows}</Flex>
    </Card>
  );
}
