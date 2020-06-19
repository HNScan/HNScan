import React from "react";
import styled from "styled-components";
import { Row, Col, Pagination, Card, useQuery } from "@urkellabs/ucl";
import theme from "styled-theming";
import { useTranslation } from "react-i18next";

// Components
import { InputList, OutputList } from "components/shared/PutsList";
import Link from "components/Link";

// const borderColor = theme("mode", {
//   light: "#dfdfdf",
//   dark: "#575757"
// });

const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #dfdfdf;

  &:first-child {
    padding: 0;
  }

  &:last-child {
    padding: 0;
    border-bottom: 0;
  }
`;

const HashWrapper = styled.div`
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  padding: 10px 0 10px 0;
`;

//@todo Highlight the Input/Output that is TO the address here.
//Just make this a filter option (so it could be used on the block page), but auto enable it when coming from the Address page, that way we can keep this same component.
//Filter options.
//To/From
//Covenant Actions
const TransactionList = ({ url, page, from }) => {
  //@todo these will come from filtering options.
  const limit = 10;
  const offset = (page - 1) * limit;
  from.limit = limit;
  from.offset = offset;
  const { data } = useQuery("/txs", from);
  const { t } = useTranslation();
  const pages = Math.ceil(data.total / limit);
  const renderTransactions = data.result.map((tx, index) => (
    <Container key={index}>
      <HashWrapper>
        Tx {index + 1 + offset}:&nbsp;
        <Link to={"/tx/" + tx.tx_id}>{tx.tx_id}</Link>
      </HashWrapper>
      <Row>
        <Col mobile={12} tablet>
          <InputList inputs={tx.inputs} />
        </Col>
        <Col mobile={12} tablet>
          <OutputList outputs={tx.outputs} />
        </Col>
      </Row>
    </Container>
  ));
  if (!data.result.length) {
    return <></>;
  }
  return (
    <>
      <Card
        collapse
        title={`${t("block_detail.transaction", {
          count: data.result.length
        })} (${offset + 1}-${offset + data.result.length})`}
      >
        {renderTransactions}
      </Card>
      <Pagination totalPages={pages} page={page} url={url} />
    </>
  );
};

export default TransactionList;
