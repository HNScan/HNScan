import React, { useState } from "react";

// SVGs
import DarkThemeIcon from "./svg/DarkThemeIcon";
import LightThemeIcon from "./svg/LightThemeIcon";

//@todo Need a way to know what theme we are.
export default function ThemeToggler({ toggleTheme }) {
  //@todo make this dynamic.
  const [theme, setTheme] = useState("light");
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
      return <DarkThemeIcon onClick={e => toggle()} />;
    } else {
      return <LightThemeIcon onClick={e => toggle()} />;
    }
  };
  return <> {themeIcon()} </>;
}
