import React from "react";

// Hooks
import useTheme from "hooks/useTheme";

export default function Arrow(props) {
  const [theme] = useTheme();
  return (
    <svg
      width="70%"
      height="70%"
      viewBox="0 0 30 31"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g fill="none">
        <polygon
          stroke={theme.logo.stroke}
          strokeWidth="3"
          transform="translate(13.500000, 15.500000) rotate(90.000000) translate(-13.500000, -15.500000) "
          points="13.5 4 25 27 2 27"
        />
      </g>
    </svg>
  );
}
