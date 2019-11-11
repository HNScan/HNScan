import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table } from "@urkellabs/ucl";
import styled from "styled-components";

const CellWrapper = styled(Table.Td)`
  display: flex;
  flex-direction: column;
`;

const DivWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const Value = styled.span`
  font-size: ${props => (props.cell ? "12px" : "16px")};
  word-wrap: break-word;
  word-break: break-all;
`;

const Label = styled.span`
  font-weight: 800;
  font-size: ${props => (props.cell ? "14px" : "16px")};
`;

const StackedBody = props => {
  return (
    <>
      <Label {...props}>{props.label}</Label>
      <Value {...props}>
        {props.link ? <Link to={props.link}>{props.value}</Link> : props.value}
      </Value>
    </>
  );
};

const StackedData = props => {
  return props.cell ? (
    <CellWrapper>
      {" "}
      <StackedBody {...props} />{" "}
    </CellWrapper>
  ) : (
    <DivWrapper>
      {" "}
      <StackedBody {...props} />{" "}
    </DivWrapper>
  );
};

StackedData.propTypes = {
  cell: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]).isRequired,
  link: PropTypes.string
};

export default StackedData;
