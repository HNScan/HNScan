import React from "react";
import styled from "styled-components";
import useTheme from "../hooks/useTheme";

// SVGs
import DarkThemeIcon from "./svg/DarkThemeIcon";
import LightThemeIcon from "./svg/LightThemeIcon";

const ThemeIcon = styled.svg`
  cursor: pointer;
  stroke: ${props => props.theme.global.textColor};
  // fill: ${props => props.theme.global.textColor};
  // color: ${props => props.theme.global.textColor};
`;

//@todo Need a way to know what theme we are.
export default function ThemeToggler() {
  const [, toggleTheme, current] = useTheme();

  const themeIcon = () => {
    if (current === "dark") {
      return <ThemeIcon as={LightThemeIcon} onClick={e => toggleTheme()} />;
    } else {
      return <ThemeIcon as={DarkThemeIcon} onClick={e => toggleTheme()} />;
    }
  };
  return <> {themeIcon()} </>;
}
