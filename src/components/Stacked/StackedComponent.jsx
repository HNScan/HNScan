import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.td`
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

const StackedData = props => {
  return (
    <Wrapper className="stacked">
      <Label>{props.label}</Label>
      <Value>
        {props.link ? <Link to={props.link}>{props.value}</Link> : props.value}
      </Value>
    </Wrapper>
  );
};

StackedData.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  link: PropTypes.string
};

export default StackedData;
