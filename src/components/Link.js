import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RouterLink)`
  color: rgb(50, 115, 220);
  cursor: pointer;
  text-decoration-line: none;
  text-decoration-style: initial;
  text-decoration-color: initial;
  text-decoration: none;

  &:hover {
    color: rgb(137, 175, 235);
  }
`;

export default Link;
