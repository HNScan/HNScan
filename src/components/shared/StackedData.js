import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CellWrapper = styled.td`
  display: flex;
  flex-direction: column;
`;

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Value = styled.span`
  font-size: 12px;
  word-wrap: break-word;
  word-break: break-all;
`;

const Label = styled.span`
  font-weight: 800;
  font-size: 14px;
`;

const StackedBody = props => {
  return (
    <>
      <Label>{props.label}</Label>
      <Value>
        {props.link ? <Link to={props.link}>{props.value}</Link> : props.value}
      </Value>
    </>
  );
}

const StackedData = props => {
  return props.cell ?
    <CellWrapper> <StackedBody {...props}/> </CellWrapper> :
    <DivWrapper> <StackedBody {...props}/> </DivWrapper>;
};

StackedData.propTypes = {
  cell: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
  link: PropTypes.string
};

export default StackedData;
