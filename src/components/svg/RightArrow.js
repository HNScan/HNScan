import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

const color = theme("mode", {
  light: "#000",
  dark: "#cfcfcf"
});

const Arrow = styled(ArrowIcon)`
  stroke: ${color};
`;

function ArrowIcon(props) {
  return (
    <svg width="70%" height="70%" viewBox="0 0 30 31" {...props}>
      <g fill="none">
        <polygon
          strokeWidth="3"
          transform="translate(13.500000, 15.500000) rotate(90.000000) translate(-13.500000, -15.500000) "
          points="13.5 4 25 27 2 27"
        />
      </g>
    </svg>
  );
}

export default Arrow;
