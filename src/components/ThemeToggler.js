import React, { useState } from "react";
import styled from "styled-components";

// SVGs
import DarkThemeIcon from "./svg/DarkThemeIcon";
import LightThemeIcon from "./svg/LightThemeIcon";

const ThemeIcon = styled.svg`
  cursor: pointer;
  stroke: ${props => props.theme.global.textColor};
  color: ${props => props.theme.global.textColor};
`;

//@todo Need a way to know what theme we are.
export default function ThemeToggler({ toggleTheme, currentTheme }) {
  //@todo make this dynamic.
  const [theme, setTheme] = useState(currentTheme);
  const toggle = () => {
    toggleTheme();
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const themeIcon = () => {
    if (theme === "dark") {
      return <ThemeIcon as={LightThemeIcon} onClick={e => toggle()} />;
    } else {
      return <ThemeIcon as={DarkThemeIcon} onClick={e => toggle()} />;
    }
  };
  return <> {themeIcon()} </>;
}
