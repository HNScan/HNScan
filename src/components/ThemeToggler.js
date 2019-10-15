import React, { useState } from "react";

// SVGs
import DarkThemeIcon from "./svg/DarkThemeIcon";
import LightThemeIcon from "./svg/LightThemeIcon";

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
      return <LightThemeIcon onClick={e => toggle()} />;
    } else {
      return <DarkThemeIcon onClick={e => toggle()} />;
    }
  };
  return <> {themeIcon()} </>;
}
