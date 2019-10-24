import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  color: ${props => props.theme.pagination.textColor};
`;

const List = styled.ul``;

export const Page = styled.nav`
  // padding: 10px;
  // margin-top: 30px;
  margin-top: 50px;
  width: 100%;
`;

Page.Button = Button;
Page.List = List;
