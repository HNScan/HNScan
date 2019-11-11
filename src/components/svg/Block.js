import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

const color = theme("mode", {
  light: "#000",
  dark: "#cfcfcf"
});

const Block = styled(BlockIcon)`
  fill: ${color};
`;

function BlockIcon(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 44 50" {...props}>
      <g strokeWidth="1">
        <g transform="translate(-125.000000, -145.000000)" fillRule="nonzero">
          <g transform="translate(125.000000, 145.000000)">
            <path d="M22,0 L0,12.5 L0,37.5 L22,50 L44,37.5 L44,12.5 L22,0 Z M39.5159631,13.3449555 L22,23.2975006 L4.48403693,13.3449555 L22,3.3927918 L39.5159631,13.3449555 Z M2.98548176,15.8866883 L20.5072591,25.8419037 L20.5072591,45.7592011 L2.98548176,35.8036041 L2.98548176,15.8866883 Z M23.4927409,45.7592011 L23.4927409,25.8419037 L41.0145182,15.8866883 L41.0145182,35.8036041 L23.4927409,45.7592011 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Block;
